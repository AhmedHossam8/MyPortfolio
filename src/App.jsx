import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Cta from './components/Cta'
import Footer from './components/Footer'
import InitScreen from './components/InitScreen'

export default function App() {
  const [initComplete, setInitComplete] = useState(false)

  return (
    <>
      {!initComplete && <InitScreen onComplete={() => setInitComplete(true)} />}
      <Header />
      <Hero initComplete={initComplete} />
      <About />
      <Skills />
      <Projects />
      <Cta />
      <Footer />
    </>
  )
}
