import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  titles = [
    'Software Engineer',
    'Full-Stack Developer',
    'Problem Solver',
    'Tech Enthusiast',
  ];
  currentTitle = '';
  titleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  phase: 'start' | 'powerOn' | 'reveal' | 'idle' = 'start';
  showIntro = true;

  private mouseX = 0;
  private mouseY = 0;
  private robotAnimFrame: number | null = null;
  private introTimers: ReturnType<typeof setTimeout>[] = [];

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  ngOnInit() {
    this.typeEffect();
    this.runIntroSequence();
  }

  private runIntroSequence() {
    this.introTimers.push(setTimeout(() => {
      this.phase = 'powerOn';
    }, 600));

    this.introTimers.push(setTimeout(() => {
      this.phase = 'reveal';
      this.showIntro = false;
    }, 2600));

    this.introTimers.push(setTimeout(() => {
      this.phase = 'idle';
      this.startRobotTracking();
    }, 3600));
  }

  private startRobotTracking() {
    const track = () => {
      const robot = document.getElementById('robotHeadIdle');
      if (robot) {
        const rect = robot.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = this.mouseX - centerX;
        const deltaY = this.mouseY - centerY;

        const rotateY = Math.max(-18, Math.min(18, deltaX / 25));
        const rotateX = Math.max(-12, Math.min(12, -deltaY / 25));

        robot.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
      this.robotAnimFrame = requestAnimationFrame(track);
    };
    this.robotAnimFrame = requestAnimationFrame(track);
  }

  typeEffect() {
    const current = this.titles[this.titleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.currentTitle = current.substring(0, this.charIndex);
      if (this.charIndex <= 0) {
        this.isDeleting = false;
        this.charIndex = 0;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        this.timeoutId = setTimeout(() => this.typeEffect(), 300);
        return;
      }
    } else {
      this.charIndex++;
      this.currentTitle = current.substring(0, this.charIndex);
      if (this.charIndex >= current.length) {
        this.isDeleting = true;
        this.timeoutId = setTimeout(() => this.typeEffect(), 2000);
        return;
      }
    }
    const speed = this.isDeleting ? 40 : 80;
    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }

  scrollToAbout() {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToProjects() {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy() {
    this.introTimers.forEach((t) => clearTimeout(t));
    if (this.timeoutId) clearTimeout(this.timeoutId);
    if (this.robotAnimFrame !== null) cancelAnimationFrame(this.robotAnimFrame);
  }
}
