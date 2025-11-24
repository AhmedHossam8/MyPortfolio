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
      title: 'Spendlify – Smart AI Finance Assistant',
      description:
        '• A smart budgeting and expense-tracking application designed to help users manage their finances effortlessly.<br>' +
        '• Features category-based spending insights, monthly summaries, real-time budget monitoring, and an integrated AI assistant for financial guidance.<br>' +
        '• Built using Python and Flask with a clean and modern full-stack architecture.',
      image: '/images/spendlify.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/albert429/Spendlify',
    },
    {
      title: 'BlogHub',
      description:
        '• A dynamic blogging platform that allows users to create, edit, publish, and manage blog posts with ease.<br>' +
        '• Includes categories, tags, comments, rich text editing, and an organized admin dashboard.<br>' +
        '• Built with Django for backend logic and a clean, responsive frontend for a smooth user experience.',
      image: '/images/bloghub.png',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/BlogHub',
    },
    {
      title: 'Crack-N-Stack',
      description:
        '• A classic Brick Breaker–style game where players control a paddle to break stacked bricks across multiple levels.<br>' +
        '• Features smooth controls, increasing difficulty, power-ups, and responsive collision mechanics.<br>' +
        '• Designed for a fun and challenging arcade experience with polished gameplay and clean visuals.',
      image: '/images/crack-n-stack.png',
      demoLink: 'https://ahmedhossam8.github.io/Crack-N-Stack/',
      githubLink: 'https://github.com/albert429/Crack-N-Stack',
    },
    {
      title: 'AI Comic App',
      description:
        '• A mobile application that generates comic strips using AI-driven character creation and automated storytelling.<br>' +
        '• Allows users to input text prompts to produce unique, stylized comic scenes instantly.<br>' +
        '• Built with modern mobile development tools and integrated deep learning models for creative content generation.',
      image: '/images/comic-book.jpg',
      demoLink: '',
      githubLink: '',
    },
    {
      title: 'Blockchain in Education',
      description:
        '• A blockchain-powered platform designed to securely manage academic credentials and certificates for higher education.<br>' +
        '• Enables decentralized verification, tamper-proof storage, and transparent credential tracking for academic institutions.<br>' +
        '• Built using Web3 technologies and smart contracts to ensure security, trust, and scalability.',
      image: '/images/blockchain.jpg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/Graduation-Project',
    },
    {
      title: 'Weather Forecast',
      description:
        '• A real-time weather forecasting application featuring accurate environmental data and a responsive UI.<br>' +
        '• Built with AngularJS for the frontend and Node.js for the backend, achieving a 95% accuracy rate based on data aggregation tests.<br>' +
        '• Includes optimized data retrieval and caching techniques for fast performance and reduced API overhead.',
      image: '/images/weather-forecast.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/weather-app',
    },
    {
      title: 'Social Media Website',
      description:
        '• A fully functional social media platform supporting user accounts, profiles, posts, and real-time interaction features.<br>' +
        '• Built with Python and FastAPI for backend logic, using PostgreSQL and SQLAlchemy for efficient and scalable data management.<br>' +
        '• Follows MVC design principles and includes authentication, feed updates, and secure API endpoints.',
      image: '/images/social-media.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/social-media-website',
    },
    {
      title: 'E-Commerce',
      description:
        '• A modern e-commerce platform offering product browsing, cart management, secure checkout, and user authentication.<br>' +
        '• Built with a React frontend for an interactive shopping experience and a PHP + GraphQL backend for fast and flexible data handling.<br>' +
        '• Includes search, filters, order tracking, and efficient state management for smooth and responsive performance.',
      image: '/images/e-commerce.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/e-commerce',
    },
  ];
}
