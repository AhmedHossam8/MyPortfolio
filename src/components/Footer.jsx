import { useEffect, useState } from 'react'
import './Footer.css'

const socialLinks = [
  { icon: 'fas fa-envelope', url: 'mailto:ahmedhossamemara8@gmail.com', label: 'Email' },
  { icon: 'fab fa-github', url: 'https://github.com/AhmedHossam8', label: 'GitHub' },
  { icon: 'fab fa-linkedin-in', url: 'https://www.linkedin.com/in/ahmed-hossam-ba55b8222/', label: 'LinkedIn' },
  { icon: 'fab fa-whatsapp', url: 'https://wa.me/+201228536464', label: 'WhatsApp' },
]

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-social">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener"
              className="social-link"
              aria-label={link.label}
            >
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
        <p className="footer-text">Designed & Built by Ahmed Emara</p>
        <p className="footer-copy">&copy; 2025 Ahmed Emara. All rights reserved.</p>
      </div>

      <button
        className={`back-to-top${showBackToTop ? ' visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  )
}
