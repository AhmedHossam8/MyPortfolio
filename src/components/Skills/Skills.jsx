'use client'

import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: 'fa-code',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C#', 'Kotlin'],
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'fa-cubes',
    skills: ['React', 'Angular', 'Django', 'FastAPI', 'Flask', 'ASP.NET Core', 'Express.js', 'Flutter'],
  },
  {
    name: 'Web Technologies',
    icon: 'fa-globe',
    skills: ['HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'Responsive Design', 'JSON'],
  },
  {
    name: 'API Technologies',
    icon: 'fa-plug',
    skills: ['REST APIs', 'GraphQL'],
  },
  {
    name: 'Databases',
    icon: 'fa-database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    name: 'AI & ML Tools',
    icon: 'fa-brain',
    skills: ['Prompt Engineering', 'Generative AI', 'OpenAI API', 'LangChain', 'RAG'],
  },
  {
    name: 'DevOps & Tools',
    icon: 'fa-cloud',
    skills: ['Git', 'Docker', 'AWS (EC2, S3, IAM, RDS, Lambda)', 'Linux', 'CI/CD', 'Jenkins', 'Agile Methodology'],
  },
  {
    name: 'Architecture & Design',
    icon: 'fa-sitemap',
    skills: ['Microservices', 'MVC', 'REST Design', 'Clean Architecture', 'JWT Authentication', 'RBAC', 'Design Patterns'],
  },
  {
    name: 'Soft Skills',
    icon: 'fa-users',
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Adaptability', 'Time Management', 'Leadership'],
  },
]

export default function Skills() {
  const titleRef = useScrollReveal()
  const subtitleRef = useScrollReveal()

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>Skills & Expertise</h2>
        <p className="section-subtitle" ref={subtitleRef}>
          Technologies and tools I've worked with throughout my academic and professional journey.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={i} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCategoryCard({ category, index }) {
  const ref = useScrollReveal()

  return (
    <div
      className="skill-category glass"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="category-header">
        <i className={`fas ${category.icon}`}></i>
        <h3>{category.name}</h3>
      </div>
      <div className="skill-tags">
        {category.skills.map((skill, j) => (
          <span className="skill-tag" key={j}>{skill}</span>
        ))}
      </div>
    </div>
  )
}
