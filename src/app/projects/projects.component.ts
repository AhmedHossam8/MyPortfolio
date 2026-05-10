import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects = [
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
  ];

  onMouseMove(event: MouseEvent, card: HTMLElement) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
  }

  onMouseLeave(card: HTMLElement) {
    card.style.transform =
      'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }

  trackByFn(index: number) {
    return index;
  }
}
