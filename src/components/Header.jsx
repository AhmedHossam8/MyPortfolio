import { useEffect, useState } from 'react'
import './Header.css'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'cv', label: 'CV' },
]

const sections = ['home', 'about', 'skills', 'projects', 'cv']

export default function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60)
      const scrollPos = window.scrollY + 120
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const offset = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= offset && scrollPos < offset + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (sectionId) => {
    setIsMenuActive(false)
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`header${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <div className="logo" onClick={() => scrollTo('home')}>
          <span className="logo-text gradient-text">Ahmed Emara</span>
          <span className="logo-title">Junior Software Engineer</span>
        </div>
        <nav className="nav">
          <ul className={`nav-list${isMenuActive ? ' active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => scrollTo(item.id)}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`mobile-toggle${isMenuActive ? ' active' : ''}`}
            onClick={() => setIsMenuActive(!isMenuActive)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
