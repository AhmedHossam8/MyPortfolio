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
      description: '• An AI-powered mobile app that generates comic strips.<br>• It leverages deep learning for character creation and storytelling.',
      image: '/images/comic-book.jpg',
      demoLink: '',
      githubLink: '',
    },
    {
      title: 'Blockchain in Education',
      description: '• A blockchain-based platform for higher education.<br>• Enables secure and decentralized credential management.',
      image: '/images/blockchain.jpg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/Graduation-Project',
    },
    {
      title: 'Weather Forecast Application',
      description: '• Created a real-time weather application using AngularJS for the frontend and Node.js for the backend, achieving a 95% accuracy rate.<br>• Optimized data retrieval and processing for performance improvements.',
      image: '/images/weather-forecast.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/weather-app',
    },
    {
      title: 'Social MediaWebsite',
      description: '• Built a social media platform supporting user profiles, posts, and real-time updates.<br>• Utilized PostgreSQL with SQLAlchemy for database management.<br>• Followed MVC design principles with Python and FastAPI for backend logic.',
      image: '/images/social-media.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/social-media-website',
    },
    {
      title: 'Car Showroom',
      description: '• Responsive UI: Built with HTML, CSS, and JavaScript for a seamless browsing experience with car listings and filters.<br>• PHP Backend: Manages car listings, user inquiries, and operations with MySQL.',
      image: '/images/car-showroom.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/Car-Showroom',
    },
    {
      title: 'E-Commerce',
      description: '• Frontend with React: Interactive UI for product listings, cart, and checkout.<br>• PHP & GraphQL Backend: Efficient data handling with PHP and GraphQL for products and orders.<br>• Key Features: Includes search, filters, user authentication, and order tracking.',
      image: '/images/e-commerce.jpeg',
      demoLink: '',
      githubLink: 'https://github.com/AhmedHossam8/e-commerce',
    },
  ];
}
