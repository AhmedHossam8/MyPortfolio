import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimateDirective } from '../scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  timelineItems = [
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

  ];

  achievements = [
    { icon: 'fa-graduation-cap', value: '3.3', label: 'GPA = Very Good with Honors' },
    { icon: 'fa-trophy', value: 'Top', label: 'of Class for 2 Consecutive Semesters' },
    { icon: 'fa-medal', value: '3rd', label: 'Place in 6th Olympiad' },
    { icon: 'fa-star', value: 'Best', label: 'Capstone Project in 2023/2024' },
  ];
}
