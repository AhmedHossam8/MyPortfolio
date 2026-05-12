import { useEffect, useState, useRef, useCallback } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'
import RobotModel from './Robot3D'
import './Hero.css'

const titles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
]

function HeroRobot({ mouseRef }) {
  const groupRef = useRef()
  const progress = useRef(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 80)
    return () => clearTimeout(t)
  }, [])

  useFrame((_, delta) => {
    if (!started) return
    progress.current = Math.min(progress.current + delta * 0.7, 1)
    const eased = 1 - Math.pow(1 - progress.current, 3)
    if (groupRef.current) {
      groupRef.current.position.x = 2.5 * (1 - eased)
      groupRef.current.position.y = -2.0 + eased * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <RobotModel mouseRef={mouseRef} position={[0, 0, 0]} />
    </group>
  )
}

export default function Hero({ initComplete }) {
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [typingActive, setTypingActive] = useState(false)
  const [contentReady, setContentReady] = useState(false)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const handleMouse = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    if (!initComplete) return
    const c = setTimeout(() => setContentReady(true), 400)
    return () => clearTimeout(c)
  }, [initComplete])

  useEffect(() => {
    if (!contentReady) return
    const t = setTimeout(() => setTypingActive(true), 600)
    return () => clearTimeout(t)
  }, [contentReady])

  useEffect(() => {
    if (!typingActive) return
    const current = titles[titleIndex]
    let timeoutId

    if (isDeleting) {
      if (charIndex <= 0) {
        timeoutId = setTimeout(() => {
          setIsDeleting(false)
          setTitleIndex((prev) => (prev + 1) % titles.length)
        }, 300)
      } else {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev - 1)
          setCurrentTitle(current.substring(0, charIndex - 1))
        }, 40)
      }
    } else {
      if (charIndex >= current.length) {
        timeoutId = setTimeout(() => setIsDeleting(true), 2000)
      } else {
        timeoutId = setTimeout(() => {
          setCharIndex((prev) => prev + 1)
          setCurrentTitle(current.substring(0, charIndex + 1))
        }, 80)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [charIndex, isDeleting, titleIndex, typingActive])

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <section className="hero" id="home">
      <div className={`hero-bg-glow`} />

      <div className={`hero-layout${initComplete ? ' visible' : ''}`}>
        <div className={`hero-content-col${contentReady ? ' visible' : ''}`}>
          <div className="hero-content">
            <div className="profile-wrapper">
              <img src="/images/ProfilePicture.png" alt="Ahmed Emara" className="profile-img" />
            </div>
            <h1 className="hero-greeting">
              Hi, I&apos;m <span className="gradient-text">Ahmed Emara</span>
            </h1>
            <div className="typing-wrapper">
              <span className="typing-text">{currentTitle}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-tagline">
              Building scalable software solutions with modern technologies.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => scrollTo('about')}>
                About Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" /></svg>
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('projects')}>
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </button>
            </div>
          </div>
        </div>

        {!isMobile && (
          <div className={`hero-robot-col${initComplete ? ' visible' : ''}`}>
            <div className="hero-robot-container">
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
                style={{ pointerEvents: 'none' }}
              >
                <Environment preset="city" />
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 8, 5]} intensity={1.2} />
                <directionalLight position={[-4, 3, -4]} intensity={0.3} color="#4488ff" />
                <spotLight position={[0, 6, 4]} intensity={2} angle={0.3} penumbra={0.8} color="#ffffff" />
                <pointLight position={[0, 1, 3]} intensity={0.8} color="#ffffff" />
                <HeroRobot mouseRef={mouseRef} />
                <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={8} blur={3} far={6} />
                <EffectComposer>
                  <Vignette eskil={false} offset={0.3} darkness={0.4} />
                </EffectComposer>
              </Canvas>
            </div>
          </div>
        )}
      </div>

      {initComplete && (
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      )}
    </section>
  )
}
