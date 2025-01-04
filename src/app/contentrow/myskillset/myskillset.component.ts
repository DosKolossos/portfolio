import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ElementRef, inject } from '@angular/core';
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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {

          
          if (entry.isIntersecting) {
            console.log(entry);
            entry.target.classList.add('aos-animate'); // Animation-Klasse hinzufügen
            observer.unobserve(entry.target); // Beobachtung beenden, wenn Animation ausgelöst wurde
          }
        });
      },
      {
        root: null, // Standard: viewport
        threshold: 1, // 10% des Elements müssen sichtbar sein
      }
    );

    elements.forEach((element: Element) => observer.observe(element));
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
