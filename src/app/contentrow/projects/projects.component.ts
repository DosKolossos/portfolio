import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
  imports: [TranslateModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})

export class ProjectsComponent implements OnInit {
  private translateService = inject(TranslateService);
  projectlist: { [key: string]: Project } = {
    // "Project Join": {
    //   id: 1,
    //   description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
    //   technologies: "JavaScript, Firebase, HTML, CSS",
    //   notes: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit am",
    //   github: "https://www.google.de",
    //   link: "https://www.google.de",
    // },
    "Project Join": {
      id: 1,
      description: "", // Wird durch die Übersetzung befüllt
      technologies: "JavaScript, Firebase, HTML, CSS",
      notes: "", // Wird durch die Übersetzung befüllt
      github: "https://www.google.de",
      link: "https://www.google.de",
    },
    // "Project Wizard Legacy": {
    //   id: 2,
    //   description: "Jump, run and throw game based on object-oriented approach. Help Merlin to fight against dangerous enemies and destroy the strong endboss.",
    //   technologies: "Object oriented programming, JavaScript, HTML, CSS",
    //   notes: "Interacting classes with each other to offer an extraordinary gaming experience",
    //   github: "https://www.google.de",
    //   link: "https://www.google.de",
    // },
    // "Project PokéDex": {
    //   id: 3,
    //   description: "A Rest-API based application for displaying all Pokémon which data are fetched from PokéAPI.",
    //   technologies: "Rest-API, JavaScript, HTML, CSS",
    //   notes: "I love Pokémon",
    //   github: "https://www.google.de",
    //   link: "https://www.google.de",
    // }
  }
//   ngOnInit(): void {
//     this.translateService.get('projects').subscribe((translation) => {
//     });
//   }
// }
ngOnInit(): void {
  // Übersetzungen laden und in die Projektliste einfügen
  Object.keys(this.projectlist).forEach(projectKey => {
    this.translateService.get(`projects.${this.toCamelCase(projectKey)}`).subscribe((translation) => {
      this.projectlist[projectKey].description = translation.description;
      this.projectlist[projectKey].notes = translation.notes;
    });
  });
}

// Helper-Funktion, um "Project Join" in "projectJoin" zu konvertieren (falls erforderlich)
private toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace(/\s+/g, '');
}
}
