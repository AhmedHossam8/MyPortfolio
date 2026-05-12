import { useEffect, useState, useRef, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import RobotModel from './Robot3D'
import './InitScreen.css'

function AnimatedRobot({ onMoveDone, isMobile }) {
  const robotGroup = useRef()
  const enterProgress = useRef(0)
  const slideProgress = useRef(0)
  const [phase, setPhase] = useState(isMobile ? 'enter' : 'idle')

  const enterStartY = isMobile ? -2.5 : -2.0
  const enterEndY = isMobile ? -0.6 : -2.0
  const slideSpeed = isMobile ? 0.4 : 0.5
  const slideDistance = isMobile ? 8 : 2.5
  const robotScale = isMobile ? 0.6 : 1

  // Phase 1: rise from below into position (mobile only)
  useEffect(() => {
    if (phase !== 'enter') return
    const t = setTimeout(() => setPhase('idle'), 1800)
    return () => clearTimeout(t)
  }, [phase])

  // Phase 2: idle wait (~1.3s)
  useEffect(() => {
    if (phase !== 'idle') return
    const t = setTimeout(() => setPhase('slide'), 1300)
    return () => clearTimeout(t)
  }, [phase])

  useFrame((_, delta) => {
    if (!robotGroup.current) return

    if (phase === 'enter') {
      enterProgress.current = Math.min(enterProgress.current + delta * 0.8, 1)
      const eased = 1 - Math.pow(1 - enterProgress.current, 4)
      robotGroup.current.position.y = enterStartY + eased * (enterEndY - enterStartY)
      robotGroup.current.rotation.set(0, 0, 0)
    }

    if (phase === 'slide') {
      slideProgress.current = Math.min(slideProgress.current + delta * slideSpeed, 1)
      const eased = 1 - Math.pow(1 - slideProgress.current, 3)
      robotGroup.current.position.x = eased * slideDistance
      robotGroup.current.rotation.set(0, 0, 0)
      if (slideProgress.current >= 1) {
        onMoveDone?.()
      }
    }
  })

  return (
    <group ref={robotGroup} position={[0, enterStartY, 0]} scale={robotScale}>
      <RobotModel position={[0, 0, 0]} />
    </group>
  )
}

export default function InitScreen({ onComplete }) {
  const [fadingOut, setFadingOut] = useState(false)
  const [moveDone, setMoveDone] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const handleMoveDone = useCallback(() => {
    setMoveDone(true)
    setFadingOut(true)
    const delay = isMobile ? 350 : 1500
    setTimeout(() => onComplete(), delay)
  }, [onComplete, isMobile])

  return (
    <div className={`init-screen${fadingOut ? ' fade-out' : ''}`}>
      <div className="init-bg-glow" />
      <Canvas
        camera={{ position: [0, 2, 7], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          pixelRatio: Math.min(window.devicePixelRatio, 2),
        }}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} />
        <directionalLight position={[-4, 3, -4]} intensity={0.5} color="#4488ff" />
        <directionalLight position={[-2, 0, -4]} intensity={0.8} color="#5599ff" />
        <spotLight position={[0, 6, 4]} intensity={3} angle={0.3} penumbra={0.8} color="#4488ff" />
        <pointLight position={[0, 1, 3]} intensity={1} color="#5599ff" />

        <AnimatedRobot onMoveDone={handleMoveDone} isMobile={isMobile} />

        <ContactShadows position={[0, -2.5, 0]} opacity={0.35} scale={8} blur={3} far={6} />
      </Canvas>

      {!moveDone && (
        <div className="init-label">SYSTEM STANDBY</div>
      )}
    </div>
  )
}
