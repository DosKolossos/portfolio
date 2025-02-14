import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, NgZone, ElementRef, AfterViewInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


interface Project {
  headline: string;
  id: number;
  image: string;
  description: string;
  technologies: string;
  notes: string;
  github: string;
  link: string;
  class: string;
}


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  animations: [
    trigger('toggleDescription', [
      state('collapsed', style({
        height: '0px',
        overflow: 'hidden',
        opacity: 0,
      })),
      state('expanded', style({
        height: '*',
        overflow: 'visible',
        opacity: 1,
      })),
      transition('collapsed <=> expanded', [
        animate('300ms ease-in-out'),
      ]),
    ]),
  ],
})

export class ProjectsComponent implements OnInit {
  private translateService = inject(TranslateService);
  private elementRef = inject(ElementRef);
  private zone = inject(NgZone);



  projectlist: { [key: string]: Project } = {
    "projectJoin": {
      headline: "Project Join",
      id: 1,
      image: "",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      technologies: "JavaScript, Firebase, HTML, CSS",
      notes: "Working on Join taught me how to efficiently integrate a database with Firebase and implement a functioning login function. The teamwork in particular showed me how important clear communication and the use of Git are for successful collaboration.",
      github: "https://github.com/DosKolossos/join360",
      link: "https://www.david-kolosza.de/join",
      class: "",
    },
    "projectWizardLegacy": {
      headline: "Project Wizard Legacy",
      id: 3,
      image: "",
      description: "Jump, run and throw game based on object-oriented approach. Help Merlin to fight against dangerous enemies and destroy the strong endboss.",
      technologies: "Object-oriented programming, JavaScript, HTML, CSS",
      notes: "Working with Canvas on Wizard Legacy helped me understand the structure of 2D games and deepened my knowledge of object-oriented programming. This project challenged my creativity and taught me to break down complex logic into manageable modules.",
      github: "https://github.com/DosKolossos/Wizard-Legacy",
      link: "https://www.david-kolosza.de/wizard-legacy",
      class: ""
    },
    "projectTemdosia": {
      headline: "Project Wiki Temdosia",
      id: 2,
      image: "",
      description: "A REST-API based application for displaying all Temtem, with data fetched from own API.",
      technologies: "Angular, REST-API, PHP, TypeScript, CSS, HTML",
      notes: "The Pokedex project helped me to develop a deep understanding of how to work with Rest APIs. I learned how to retrieve data in a structured and user-friendly way, which improved my skills in JS and CSS tremendously.",
      github: "https://github.com/DosKolossos/Temdosia",
      link: "https://www.temdosia.de",
      class: ""
    }
  };
  

  expandedMobileProjectId: number | null = null;
  currentLanguage: String = localStorage['language'];
  languageIsLol: boolean = false;

  ngOnInit(): void {

    
    this.translateService.onLangChange.subscribe(() => {
      if (this.currentLanguage == 'lol') {
        this.languageIsLol = true;
      }

      this.updateData()
      
    })
    

  }

  updateData(){
    Object.keys(this.projectlist).forEach(projectKey => {
      const key = this.toCamelCase(projectKey); // Wandelt "Project PokéDex" zu "projectPokedex"
      this.translateService.get(`projects.${key}`).subscribe((translation) => {
        this.projectlist[projectKey].description = translation.description;
        this.projectlist[projectKey].notes = translation.notes;
        this.projectlist[projectKey].headline = translation.headline;
        this.projectlist[projectKey].technologies = translation.technologies;
        this.projectlist[projectKey].image = translation.image;
        this.projectlist[projectKey].class = translation.class;
      });
    });
  }

  toggleMobileProject(id: number): void {
    this.expandedMobileProjectId = this.expandedMobileProjectId === id ? null : id;
  }

getToggleText(projectId: number): string {
  return this.expandedMobileProjectId === projectId
      ? this.translateService.instant('showMeLess')
      : this.translateService.instant('showMeMore');
}



    sortById(a: any, b: any): number {
      return a.value.id - b.value.id; // Sortiert nach der ID aufsteigend
    }

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

  isMenuOpen = false; // Standard: Menü geschlossen

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Umschalten des Zustands

  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start'});
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }

  ngAfterViewInit(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll('.project-wrapper');
    const headline = this.elementRef.nativeElement.querySelectorAll('.content-wrapper');
    const ogp = this.elementRef.nativeElement.querySelectorAll('.ogp');
    const checkVisibility = () => {
      elements.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add('animate'); // Animation-Klasse hinzufügen

        }
      });
        headline.forEach((element: Element) => {
          const rect = element.getBoundingClientRect();

          // Überprüfen, ob das Element horizontal sichtbar ist
          if (rect.left >= 0 && rect.left <= window.innerWidth) {
            
            element.classList.add('slide-bottom-normal'); // Animation-Klasse hinzufügen
            
          }
        });
        ogp.forEach((element: Element) => {
          const rect = element.getBoundingClientRect();

          // Überprüfen, ob das Element horizontal sichtbar ist
          if (rect.left >= 0 && rect.left <= window.innerWidth) {
            
            element.classList.add('slide-bottom-normal'); // Animation-Klasse hinzufügen
            
          }
        });
    };

    // Initiale Prüfung beim Laden der Seite
    this.zone.runOutsideAngular(() => {
      window.addEventListener('scroll', checkVisibility);
      window.addEventListener('resize', checkVisibility);
    });

    // Bereinigen der Events beim Verlassen des Components
    checkVisibility();
  }
}
