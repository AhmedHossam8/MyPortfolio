import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations, useTexture, Float } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export default function RobotModel({ mouseRef, still = false, position = [0, -1.8, 0] }) {
  const groupRef = useRef()
  const bodyRef = useRef()
  const headBone = useRef()
  const rightArm = useRef()
  const rightForeArm = useRef()
  const leftArm = useRef()
  const leftForeArm = useRef()
  const smoothTarget = useRef({ x: 0, y: 0 })
  const breathPhase = useRef(0)

  // Fade-in opacity on mount to hide any first-frame pose snap
  const fadeIn = useRef(0)
  const wrapperRef = useRef()

  const { scene, animations } = useGLTF('/models/model.glb')
  const { actions } = useAnimations(animations, groupRef)

  const [diffuse, normal, metallic, roughness] = useTexture([
    '/models/texture_diffuse.png',
    '/models/texture_normal.png',
    '/models/texture_metallic.png',
    '/models/texture_roughness.png',
  ])

  const modelScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene)

    const firstModel = clone.getObjectByName('model')
    const firstArmature = clone.getObjectByName('Armature')
    while (clone.children.length) clone.remove(clone.children[0])
    if (firstModel) clone.add(firstModel)
    if (firstArmature) clone.add(firstArmature)

    diffuse.colorSpace = THREE.SRGBColorSpace
    normal.colorSpace = THREE.LinearSRGBColorSpace
    metallic.colorSpace = THREE.LinearSRGBColorSpace
    roughness.colorSpace = THREE.LinearSRGBColorSpace

    diffuse.flipY = false
    normal.flipY = false
    metallic.flipY = false
    roughness.flipY = false

    clone.traverse((child) => {
      if (child.isMesh) {
        if (child.material) child.material.dispose()
        child.material = new THREE.MeshStandardMaterial({
          map: diffuse,
          normalMap: normal,
          roughnessMap: roughness,
          metalnessMap: metallic,
          roughness: 1.0,
          metalness: 1.0,
          envMapIntensity: 1.0,
        })
        child.material.needsUpdate = true
        child.castShadow = true
        child.receiveShadow = true
      }

      if (child.isBone) {
        if (child.name === 'mixamorigHead') headBone.current = child
        if (child.name === 'mixamorigRightArm') rightArm.current = child
        if (child.name === 'mixamorigRightForeArm') rightForeArm.current = child
        if (child.name === 'mixamorigLeftArm') leftArm.current = child
        if (child.name === 'mixamorigLeftForeArm') leftForeArm.current = child
      }
    })

    return clone
  }, [scene, diffuse, normal, metallic, roughness])

  useEffect(() => {
    if (!still && actions && Object.keys(actions).length > 0) {
      const action = actions[Object.keys(actions)[0]]
      action.setLoop(THREE.LoopRepeat)
      action.play()
    }
  }, [actions, still])

  useFrame((state, delta) => {
    // Fade in over ~0.5s to hide first-frame skeleton snap
    if (fadeIn.current < 1) {
      fadeIn.current = Math.min(fadeIn.current + delta * 2, 1)
      if (wrapperRef.current) {
        wrapperRef.current.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.opacity = fadeIn.current
            child.material.transparent = fadeIn.current < 1
          }
        })
      }
    }

    if (still) return

    // Breathing / idle sway
    breathPhase.current += delta * 1.8
    const breath = 1 + Math.sin(breathPhase.current) * 0.004
    if (bodyRef.current) {
      bodyRef.current.scale.y = breath
      bodyRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.012
      bodyRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2 + 1) * 0.008
    }

    // Gentle forearm idle sway
    if (rightForeArm.current) {
      rightForeArm.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.06
    }
    if (leftForeArm.current) {
      leftForeArm.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2 + 1) * 0.06
    }

    // Head tracking
    if (mouseRef?.current && headBone.current) {
      const x = (mouseRef.current.x / window.innerWidth - 0.5) * 2
      const y = (mouseRef.current.y / window.innerHeight - 0.5) * 2
      smoothTarget.current.x += (x * 0.4 - smoothTarget.current.x) * 0.05
      smoothTarget.current.y += (y * 0.25 - smoothTarget.current.y) * 0.05
      headBone.current.rotation.x = smoothTarget.current.y
      headBone.current.rotation.y = smoothTarget.current.x
    }


  })

  const content = (
    <group ref={groupRef} position={position}>
      <group ref={bodyRef}>
        {/* wrapperRef is used for the fade-in opacity traversal */}
        <primitive ref={wrapperRef} object={modelScene} scale={52} />
      </group>
    </group>
  )

  if (still) return content

  return (
    // rotationIntensity={0} eliminates the random rotation on spawn
    // floatIntensity kept low and speed slow for gentle bob only
    <Float speed={1.2} rotationIntensity={0} floatIntensity={0.15}>
      {content}
    </Float>
  )
}