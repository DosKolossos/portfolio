import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ElementRef, inject, NgZone } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-myskillset',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './myskillset.component.html',
  styleUrl: './myskillset.component.scss'
})
export class MyskillsetComponent implements OnInit, AfterViewInit {
  private translateService = inject(TranslateService);
  private elementRef = inject(ElementRef);
  private zone = inject(NgZone);

  logoTexts = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Rest-API",
    "Firebase",
    "GIT",
    "Scrum",
    "Material Design",
    "Challenge me",
  ]
  classes = [
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "content-column",
  ]


  ngOnInit(): void {
    this.translateService.get('myskillset').subscribe((translation) => {
    });
  }


  ngAfterViewInit(): void {
    const elements = this.elementRef.nativeElement.querySelectorAll('.animate-on-scroll');
    const logos = this.elementRef.nativeElement.querySelectorAll('.logo-wrapper');

    const checkVisibility = () => {
      elements.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add('aos-animate'); // Animation-Klasse hinzufügen

        }
      });
      logos.forEach((element: Element, index: number) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add(`fade-in-normal-logo${index +1}`); // Animation-Klasse hinzufügen

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

  isMenuOpen = false; // Standard: Menü geschlossen

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Umschalten des Zustands

  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }
}
