import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    title: 'Service-Hub',
    description:
      'AI-powered project analysis platform for scoring and comparing bids. Features structured tender insights, secure authentication, role-based dashboards, and advanced search tools. Deployed with Docker and AWS EC2.',
    image: '/images/servicehub.png',
    tech: ['Angular', 'Django', 'PostgreSQL', 'Docker', 'AWS'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/service-hub',
  },
  {
    title: 'Spendlify — AI Finance Assistant',
    description:
      'Smart budgeting and expense-tracking app with category-based spending insights, monthly summaries, real-time budget monitoring, and an integrated AI assistant for financial guidance.',
    image: '/images/spendlify.jpeg',
    tech: ['Python', 'Flask', 'AI', 'Finance'],
    demoLink: '',
    githubLink: 'https://github.com/albert429/Spendlify',
  },
  {
    title: 'BlogHub',
    description:
      'Dynamic blogging platform for creating, editing, publishing, and managing blog posts. Includes categories, tags, comments, rich text editing, and an organized admin dashboard.',
    image: '/images/bloghub.png',
    tech: ['Django', 'Python', 'PostgreSQL', 'Bootstrap'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/BlogHub',
  },
  {
    title: 'Crack-N-Stack',
    description:
      'Classic Brick Breaker game with smooth controls, increasing difficulty, power-ups, and responsive collision mechanics. Designed for a fun and challenging arcade experience.',
    image: '/images/crack-n-stack.png',
    tech: ['JavaScript', 'HTML5', 'Game Dev'],
    demoLink: 'https://ahmedhossam8.github.io/Crack-N-Stack/',
    githubLink: 'https://github.com/albert429/Crack-N-Stack',
  },
  {
    title: 'AI Comic App',
    description:
      'Mobile app that generates comic strips using AI-driven character creation and automated storytelling. Users input text prompts to produce unique, stylized comic scenes instantly.',
    image: '/images/comic-book.jpg',
    tech: ['Kotlin', 'Flutter', 'AI', 'Mobile'],
    demoLink: '',
    githubLink: '',
  },
  {
    title: 'Blockchain in Education',
    description:
      'Graduation project — a platform using Blockchain and NFTs to manage educational credentials securely. Received funding from ITIDA, secured 3rd place in the 6th Olympiad, and won "Best Capstone Project of 2023/2024" by the Computer Science Society.',
    image: '/images/blockchain.jpg',
    tech: ['Blockchain', 'Web3', 'Solidity', 'NFT', 'Ethereum'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/Graduation-Project',
  },
  {
    title: 'Weather Forecast',
    description:
      'Real-time weather forecasting app with accurate environmental data and responsive UI. Features optimized data retrieval and caching for fast performance and reduced API overhead.',
    image: '/images/weather-forecast.jpeg',
    tech: ['Angular', 'Node.js', 'API', 'Caching'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/weather-app',
  },
  {
    title: 'Social Media Website',
    description:
      'Fully functional social media platform with user accounts, profiles, posts, and real-time interaction. Built with MVC architecture, authentication, and secure API endpoints.',
    image: '/images/social-media.jpeg',
    tech: ['FastAPI', 'Python', 'PostgreSQL', 'MVC'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/social-media-website',
  },
  {
    title: 'E-Commerce Platform',
    description:
      'Modern e-commerce platform with product browsing, cart management, secure checkout, and authentication. Includes search, filters, order tracking, and efficient state management.',
    image: '/images/e-commerce.jpeg',
    tech: ['React', 'PHP', 'GraphQL', 'State Management'],
    demoLink: '',
    githubLink: 'https://github.com/AhmedHossam8/e-commerce',
  },
]

export default function Projects() {
  const titleRef = useScrollReveal()
  const subtitleRef = useScrollReveal()

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Featured Projects</h2>
        <p className="section-subtitle" ref={subtitleRef}>
          A selection of projects that showcase my skills and passion for building software.
        </p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const cardRef = useScrollReveal()

  const onMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`)
    card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`)
  }

  const onMouseLeave = (e) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <div
      className="project-card glass"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
        <div className="project-overlay">
          <div className="overlay-links">
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener" className="overlay-btn">
                <i className="fab fa-github"></i> Code
              </a>
            )}
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener" className="overlay-btn">
                <i className="fas fa-external-link-alt"></i> Live
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t, i) => (
            <span className="tech-tag" key={i}>{t}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
          {project.demoLink && (
            <a href={project.demoLink} target="_blank" rel="noopener">
              <i className="fas fa-external-link-alt"></i> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
