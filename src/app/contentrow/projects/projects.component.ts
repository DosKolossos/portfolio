import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  id: number;
  description: string;
  technologies: string;
  notes: string;
  github: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent {
  projectlist: { [key: string]: Project } = {
    "Project Join": {
      id: 1,
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologies: "JavaScript, Firebase, HTML, CSS",
      notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am",
      github: "https://www.google.de",
      link: "https://www.google.de",
    },
    "Project Wizard Legacy": {
      id: 2,
      description: "Jump, run and throw game based on object-oriented approach. Help Merlin to fight against dangerous enemies and destroy the strong endboss.",
      technologies: "Object oriented programming, JavaScript, HTML, CSS",
      notes: "Interacting classes with each other to offer an extraordinary gaming experience",
      github: "https://www.google.de",
      link: "https://www.google.de",
    },
    "Project PokéDex": {
      id: 3,
      description: "A Rest-API based application for displaying all Pokémon which data are fetched from PokéAPI.",
      technologies: "Rest-API, JavaScript, HTML, CSS",
      notes: "I love Pokémon",
      github: "https://www.google.de",
      link: "https://www.google.de",
    }
  }
}
