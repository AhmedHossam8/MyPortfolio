import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AI Comic App',
      description: `An AI-powered mobile app that generates comic strips.
                    It leverages deep learning for character creation and storytelling.`,
      image: '/images/comic-book.jpg',
      demoLink: '',
      githubLink: '',
    },
    {
      title: 'Blockchain in Education',
      description: `A blockchain-based platform for higher education.\n
                    Enables secure and decentralized credential management.`,
      image: '/images/blockchain.jpg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/Graduation-Project',
    },
    {
      title: 'Weather Forecast Application',
      description: `• Created a real-time weather application using AngularJS for the frontend and Node.js for the backend, achieving a 95% accuracy rate.
                    • Optimized data retrieval and processing for performance improvements.`,
      image: '/images/portfolio.png',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/weather-app',
    },
    {
      title: 'Social MediaWebsite',
      description: `• Built a social media platform supporting user profiles, posts, and real-time updates.
                    • Utilized PostgreSQL with SQLAlchemy for database management.
                    • Followed MVC design principles with Python and FastAPI for backend logic.`,
      image: '/images/portfolio.png',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/social-media-website',
    },
  ];
}
