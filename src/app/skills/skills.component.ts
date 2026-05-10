import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skillCategories = [
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
  ];

  trackByFn(index: number) {
    return index;
  }
}
