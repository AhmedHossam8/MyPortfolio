import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const titles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Problem Solver',
  'Tech Enthusiast',
]

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [phase, setPhase] = useState('start')
  const [showIntro, setShowIntro] = useState(true)

  const mousePos = useRef({ x: 0, y: 0 })
  const robotAnimFrame = useRef(null)

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    document.addEventListener('mousemove', onMouseMove)
    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  const calcZoomTransform = () => {
    const overlay = document.getElementById('introOverlay')
    const idleRobot = document.getElementById('robotHeadIdle')
    if (!overlay || !idleRobot) return
    const idle = idleRobot.getBoundingClientRect()
    if (idle.width === 0 || idle.height === 0) return
    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    const idleCx = idle.left + idle.width / 2
    const idleCy = idle.top + idle.height / 2
    overlay.style.setProperty('--zoom-tx', `${idleCx - cx}px`)
    overlay.style.setProperty('--zoom-ty', `${idleCy - cy}px`)
  }

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('powerOn'), 600)
    const t2 = setTimeout(() => {
      calcZoomTransform()
      setPhase('zoomOut')
    }, 1800)
    const t3 = setTimeout(() => {
      setPhase('reveal')
      setShowIntro(false)
    }, 3000)
    const t4 = setTimeout(() => {
      setPhase('idle')
    }, 4000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4) }
  }, [])

  useEffect(() => {
    if (phase !== 'idle') return
    const track = () => {
      const robot = document.getElementById('robotHeadIdle')
      if (robot) {
        const rect = robot.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        const deltaX = mousePos.current.x - centerX
        const deltaY = mousePos.current.y - centerY
        const rotateY = Math.max(-18, Math.min(18, deltaX / 25))
        const rotateX = Math.max(-12, Math.min(12, -deltaY / 25))
        robot.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
      robotAnimFrame.current = requestAnimationFrame(track)
    }
    robotAnimFrame.current = requestAnimationFrame(track)
    return () => {
      if (robotAnimFrame.current !== null) cancelAnimationFrame(robotAnimFrame.current)
    }
  }, [phase])

  useEffect(() => {
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
          const next = charIndex - 1
          setCharIndex(next)
          setCurrentTitle(current.substring(0, next))
        }, 40)
      }
    } else {
      if (charIndex >= current.length) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      } else {
        timeoutId = setTimeout(() => {
          const next = charIndex + 1
          setCharIndex(next)
          setCurrentTitle(current.substring(0, next))
        }, 80)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [charIndex, isDeleting, titleIndex])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const isIdle = phase === 'idle'
  const isRevealOrIdle = phase === 'reveal' || phase === 'idle'
  const isPowered = phase === 'powerOn' || phase === 'zoomOut' || phase === 'reveal' || phase === 'idle'
  const isPowerOnOrZoom = phase === 'powerOn' || phase === 'zoomOut'

  return (
    <section className="hero" id="home">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {showIntro && (
        <div
          className={`intro-overlay${phase === 'reveal' ? ' fade-out' : ''}${phase === 'zoomOut' ? ' zoom-out' : ''}`}
          id="introOverlay"
        >
          <div
            className={`intro-robot${isPowerOnOrZoom ? ' powered' : ''}${(phase === 'zoomOut' || phase === 'reveal') ? ' zoom-out' : ''}`}
            id="introRobot"
          >
            <RobotBody />
            <div className="intro-glow-overlay"></div>
          </div>
          <div className={`scan-line${phase === 'powerOn' ? ' active' : ''}`}></div>
          <div className={`power-flash${phase === 'powerOn' ? ' active' : ''}`}></div>
          <div className={`intro-text${phase === 'powerOn' ? ' show' : ''}`}>INITIALIZING...</div>
        </div>
      )}

      <div className={`hero-layout${isRevealOrIdle ? ' visible' : ''}`}>
        <div className={`hero-content-col${isRevealOrIdle ? ' visible' : ''}`}>
          <div className="hero-content">
            <div className="profile-wrapper">
              <div className="profile-glow"></div>
              <img src="/images/ProfilePicture.png" alt="Ahmed Emara" className="profile-img" />
            </div>
            <h1 className="hero-name">
              Hi, I'm <span className="gradient-text">Ahmed Emara</span>
            </h1>
            <div className="typing-wrapper">
              <span className="typing-text">{currentTitle}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-tagline">
              Building scalable software solutions with modern technologies.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={scrollToAbout}>
                About Me
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
              </button>
              <button className="btn btn-outline" onClick={scrollToProjects}>
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hero-robot-col" id="robotCol">
          <div
            className={`robot-idle-wrapper${isPowered ? ' powered' : ''}`}
            id="robotHeadIdle"
          >
            <RobotBody />
            <div className="intro-glow-overlay"></div>
            <div className="robot-idle-glow"></div>
          </div>
        </div>
      </div>

      {isIdle && (
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      )}
    </section>
  )
}

function RobotBody() {
  return (
    <div className="robot-body">
      <div className="r-head">
        <div className="r-crest"></div>
        <div className="r-helmet">
          <div className="r-visor"></div>
          <div className="r-ear left"></div>
          <div className="r-ear right"></div>
          <div className="r-cheek left"></div>
          <div className="r-cheek right"></div>
          <div className="r-chin"></div>
          <div className="r-grill"></div>
        </div>
      </div>
      <div className="r-neck">
        <div className="r-neck-ring"></div>
      </div>
      <div className="r-torso">
        <div className="r-upper-plate"></div>
        <div className="r-arc-reactor">
          <div className="r-arc-core"></div>
          <div className="r-arc-ring"></div>
        </div>
        <div className="r-waist"></div>
        <div className="r-shoulder left"></div>
        <div className="r-shoulder right"></div>
        <div className="r-arm left">
          <div className="r-arm-upper"></div>
          <div className="r-arm-joint"></div>
        </div>
        <div className="r-arm right">
          <div className="r-arm-upper"></div>
          <div className="r-arm-joint"></div>
        </div>
      </div>
    </div>
  )
}
