import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  showBackToTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showBackToTop = window.scrollY > 500;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  socialLinks = [
    {
      icon: 'fas fa-envelope',
      url: 'mailto:ahmedhossamemara8@gmail.com',
      label: 'Email',
    },
    {
      icon: 'fab fa-github',
      url: 'https://github.com/AhmedHossam8',
      label: 'GitHub',
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://www.linkedin.com/in/ahmed-hossam-ba55b8222/',
      label: 'LinkedIn',
    },
    {
      icon: 'fab fa-whatsapp',
      url: 'https://wa.me/+201228536464',
      label: 'WhatsApp',
    },
  ];
}
