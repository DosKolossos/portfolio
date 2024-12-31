import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-myskillset',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './myskillset.component.html',
  styleUrl: './myskillset.component.scss'
})
export class MyskillsetComponent implements OnInit {
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
