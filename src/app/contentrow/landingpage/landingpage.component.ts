import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ElementRef, inject, NgZone } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit, AfterViewInit {
  private translateService = inject(TranslateService);
  private elementRef = inject(ElementRef);
  private zone = inject(NgZone);

  ngOnInit(): void {
    // Hier können Initialisierungslogiken eingefügt werden, falls notwendig
  }

  ngAfterViewInit(): void {
    const name = this.elementRef.nativeElement.querySelectorAll('.animate-name');
    const job = this.elementRef.nativeElement.querySelectorAll('.animate-job');
    const city = this.elementRef.nativeElement.querySelectorAll('.animate-city');

    const checkVisibility = () => {
      name.forEach((element: Element) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add('name-animate'); // Animation-Klasse hinzufügen

        }
      });
      job.forEach((element: Element, index: number) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add('job-animate'); // Animation-Klasse hinzufügen

        }
      });
      city.forEach((element: Element, index: number) => {
        const rect = element.getBoundingClientRect();

        // Überprüfen, ob das Element horizontal sichtbar ist
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
          element.classList.add('city-animate'); // Animation-Klasse hinzufügen

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
      element.scrollIntoView({ behavior: 'smooth', inline: 'start'});
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }

}
