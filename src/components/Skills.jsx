import { useScrollReveal } from '../hooks/useScrollReveal'
import './Skills.css'

const skillCategories = [
  {
    name: 'Programming Languages',
    icon: 'fa-code',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'C#', level: 70 },
      { name: 'Kotlin', level: 65 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    icon: 'fa-cubes',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Angular', level: 85 },
      { name: 'Django', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Flask', level: 75 },
      { name: 'ASP.NET Core', level: 70 },
      { name: 'Express.js', level: 75 },
      { name: 'Flutter', level: 60 },
    ],
  },
  {
    name: 'Web Technologies',
    icon: 'fa-globe',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'SCSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Responsive Design', level: 90 },
      { name: 'JSON', level: 85 },
    ],
  },
  {
    name: 'API Technologies',
    icon: 'fa-plug',
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
    ],
  },
  {
    name: 'Databases',
    icon: 'fa-database',
    skills: [
      { name: 'PostgreSQL', level: 80 },
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 70 },
    ],
  },
  {
    name: 'AI & ML Tools',
    icon: 'fa-brain',
    skills: [
      { name: 'Prompt Engineering', level: 85 },
      { name: 'Generative AI', level: 80 },
      { name: 'OpenAI API', level: 80 },
      { name: 'LangChain', level: 75 },
      { name: 'RAG', level: 70 },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: 'fa-cloud',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'AWS (EC2, S3, IAM, RDS, Lambda)', level: 75 },
      { name: 'Linux', level: 80 },
      { name: 'CI/CD', level: 75 },
      { name: 'Jenkins', level: 65 },
      { name: 'Agile Methodology', level: 80 },
    ],
  },
  {
    name: 'Architecture & Design',
    icon: 'fa-sitemap',
    skills: [
      { name: 'Microservices', level: 75 },
      { name: 'MVC', level: 85 },
      { name: 'REST Design', level: 85 },
      { name: 'Clean Architecture', level: 80 },
      { name: 'JWT Authentication', level: 85 },
      { name: 'RBAC', level: 80 },
      { name: 'Design Patterns', level: 75 },
    ],
  },
  {
    name: 'Soft Skills',
    icon: 'fa-users',
    skills: [
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 95 },
      { name: 'Teamwork', level: 85 },
      { name: 'Adaptability', level: 85 },
      { name: 'Time Management', level: 80 },
      { name: 'Leadership', level: 75 },
    ],
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
      <div className="skill-items">
        {category.skills.map((skill, j) => (
          <div className="skill-item" key={j}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
