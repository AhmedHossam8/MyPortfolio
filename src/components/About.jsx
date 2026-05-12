import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const timelineItems = [
  {
    date: '2025 - 2026',
    title: 'Full-Stack Development Training',
    subtitle: 'Information Technology Institute (ITI)',
    description:
      'Intensive hands-on training in modern web development. Built real-world projects using React, Node.js, Django, and relational databases. Worked with Git, Docker, and CI/CD pipelines, strengthening agile development practices.',
    image: '/images/iti.jpeg',
    type: 'experience',
  },
  {
    date: '2023',
    title: 'Software Engineer Intern',
    subtitle: 'ITWorx',
    description:
      'Contributed to a mobile AI-based comic app. Gained experience in Android development with Kotlin and cross-platform development with Flutter, integrating AI-driven features into real-world applications.',
    image: '/images/itworx.JPG',
    type: 'experience',
  },
  {
    date: '2020 - 2024',
    title: 'B.Sc. in Computer Science',
    subtitle: 'Arab Academy for Science, Technology & Maritime Transport',
    description:
      'Graduated with a GPA of 3.3 — "Very Good with Honors". Topped the class for two consecutive semesters. Participated in ECPC programming competition. Worked as a Problem Solving and Data Structure Instructor.',
    image: '/images/top-student.jpg',
    type: 'education',
  },
]

const achievements = [
  { icon: 'fa-graduation-cap', value: '3.3', label: 'GPA = Very Good with Honors' },
  { icon: 'fa-trophy', value: 'Top', label: 'of Class for 2 Consecutive Semesters' },
  { icon: 'fa-medal', value: '3rd', label: 'Place in 6th Olympiad' },
  { icon: 'fa-star', value: 'Best', label: 'Capstone Project in 2023/2024' },
]

export default function About() {
  const titleRef = useScrollReveal()
  const subtitleRef = useScrollReveal()
  const bioRef = useScrollReveal()
  const timelineRef = useScrollReveal()
  const achievementsRef = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title" ref={titleRef}>About Me</h2>
        <p className="section-subtitle" ref={subtitleRef}>
          A passionate software engineer dedicated to building impactful and scalable solutions.
        </p>

        <div className="bio glass" ref={bioRef}>
          <p>
            I am Ahmed Emara, a Junior Software Engineer with a strong passion for building impactful and scalable
            software solutions. I specialize in full-stack web development with experience in modern technologies
            including React, Angular, .NET, and Django. I enjoy transforming ideas into real-world applications,
            writing clean and maintainable code, and continuously improving my technical and problem-solving skills.
            My goal is to contribute to innovative projects while growing as a software engineer in a challenging and
            collaborative environment.
          </p>
        </div>

        <div className="timeline" ref={timelineRef}>
          {timelineItems.map((item, i) => (
            <div
              key={i}
              className={`timeline-item${i % 2 === 0 ? ' timeline-left' : ' timeline-right'}`}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card glass">
                <span className="timeline-date">{item.date}</span>
                <h3>{item.title}</h3>
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="timeline-img"
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="achievements" ref={achievementsRef}>
          {achievements.map((ach, i) => (
            <div key={i} className="achievement-card glass">
              <i className={`fas ${ach.icon}`}></i>
              <span className="achievement-value">{ach.value}</span>
              <span className="achievement-label">{ach.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
