import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMenuActive = false;
  activeSection = 'home';
  isScrolled = false;

  private sections = ['home', 'about', 'skills', 'projects', 'cv'];

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
  ];

  ngOnInit() {
    this.onScroll();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 60;
    const scrollPos = window.scrollY + 120;
    for (const section of this.sections) {
      const el = document.getElementById(section);
      if (el) {
        const offset = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= offset && scrollPos < offset + height) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  closeMenu() {
    this.isMenuActive = false;
  }

  scrollTo(sectionId: string) {
    this.closeMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy() {}
}
