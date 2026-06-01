import './Cta.css'

export default function Cta() {
  return (
    <section className="cta" id="cv">
      <div className="container">
        <h2 className="section-title">Download My CV</h2>
        <p className="section-subtitle">
          Interested in working together? Download my resume to learn more about my experience and skills.
        </p>
        <a href="/cv/Ahmed_Emara_CV.pdf" target="_blank" rel="noopener" className="cv-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
    </section>
  )
}
