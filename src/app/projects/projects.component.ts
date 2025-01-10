import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Comic App',
      description: `An AI-powered mobile app that generates comic strips.\n
                    It leverages deep learning for character creation and storytelling.`,
      image: 'assets/images/ai-comic-app.png',
      demoLink: '',
      githubLink: '',
    },
    {
      title: 'Blockchain in Education',
      description: `A blockchain-based platform for higher education.\n
                    Enables secure and decentralized credential management.`,
      image: 'assets/images/blockchain-education.png',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/Graduation-Project',
    },
    {
      title: 'Portfolio Website',
      description: `A responsive personal portfolio built with Angular.\n
                    Features modern design and adaptive layouts.`,
      image: 'assets/images/portfolio.png',
      demoLink: '',
      githubLink: 'https://github.com/your-repo',
    },
    {
      title: 'Portfolio Website',
      description: `A responsive personal portfolio built with Angular.\n
                    Features modern design and adaptive layouts.`,
      image: 'assets/images/portfolio.png',
      demoLink: '',
      githubLink: 'https://github.com/your-repo',
    },
  ];
}
