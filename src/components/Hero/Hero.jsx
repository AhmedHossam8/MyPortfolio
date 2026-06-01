'use client'

import { useEffect, useState, useCallback } from 'react'
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
  const [typingActive, setTypingActive] = useState(false)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    const c = setTimeout(() => setContentReady(true), 200)
    return () => clearTimeout(c)
  }, [])

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
      <div className="hero-bg-glow" />

      <div className={`hero-layout${contentReady ? ' visible' : ''}`}>
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
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}
