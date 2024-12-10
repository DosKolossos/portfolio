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
    "Project Join": {
      id: 1,
      description: "",
      technologies: "JavaScript, Firebase, HTML, CSS",
      notes: "",
      github: "https://www.google.de",
      link: "https://www.google.de",
    },
    "Project Wizard Legacy": {
      id: 2,
      description: "",
      technologies: "Object oriented programming, JavaScript, HTML, CSS",
      notes: "",
      github: "https://www.google.de",
      link: "https://www.google.de",
    },
    "Project PokeDex": {
      id: 3,
      description: "",
      technologies: "Rest-API, JavaScript, HTML, CSS",
      notes: "",
      github: "https://www.google.de",
      link: "https://www.google.de",
    }
  }

  ngOnInit(): void {
    // Übersetzungen laden und in die Projektliste einfügen
    Object.keys(this.projectlist).forEach(projectKey => {
      const key = this.toCamelCase(projectKey); // Wandelt "Project PokéDex" zu "projectPokedex"
      this.translateService.get(`projects.${key}`).subscribe((translation) => {
        this.projectlist[projectKey].description = translation.description;
        this.projectlist[projectKey].notes = translation.notes;
      });
    });
  }

    // Custom-Sortierfunktion für die keyvalue-Pipe
    sortById(a: any, b: any): number {
      return a.value.id - b.value.id; // Sortiert nach der ID aufsteigend
    }

  // Optimierte Helper-Funktion, um "Project Join" in "projectJoin" zu konvertieren
  private toCamelCase(str: string): string {
    return str
      .normalize('NFD') // Sonderzeichen wie é in e umwandeln
      .replace(/[\u0300-\u036f]/g, '') // Entfernt Akzente
      .replace(/[^a-zA-Z0-9]/g, ' ') // Ersetzt Sonderzeichen durch Leerzeichen
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => 
        index === 0 ? match.toLowerCase() : match.toUpperCase()
      )
      .replace(/\s+/g, '');
  }
}
