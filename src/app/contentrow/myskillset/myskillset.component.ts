import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
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
    AOS.init({
      offset: 120, // Abstand bis zur Aktivierung
      duration: 600, // Dauer der Animation
      easing: 'ease-in-out', // Animationseffekt
      once: true, // Animation nur einmal abspielen
      anchorPlacement: 'top-bottom', // Aktivieren, wenn das Element in den Viewport scrollt
    });
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
