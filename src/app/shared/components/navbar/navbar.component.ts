import { CommonModule } from '@angular/common';
import { Component, Input, inject, Output, EventEmitter, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  private translateService = inject(TranslateService);
  @Input() contactMeUsed!: boolean;


  isMenuOpen = false; // Standard: Menü geschlossen
  
  constructor(private router: Router) { }

  ngOnInit() { }

  isHomeRoute() {
    return this.router.url === '/';
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    // Sicherstellen, dass Änderungen korrekt angewendet werden
    setTimeout(() => {
      const overlay = document.querySelector('.navbar-mobile-overlay');
      if (overlay) {
        overlay.classList.toggle('open', this.isMenuOpen);
      }
    }, 50); // Kleiner Timeout für CSS-Übergang
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation

  }
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  // Variable zur Speicherung der aktuellen Sprache
  currentLanguage: string = 'en'; // Standardmäßig auf 'en' (Englisch) gesetzt

  changeLanguage(lang: string) {
    this.currentLanguage = lang; // Setze die aktive Sprache
    this.languageChange.emit(lang); // Emitiere das Ereignis, um die Änderung zu melden
    console.log('contactMeUsed: wird in navbar.ts getriggert');
    this.toggleMenu();
  }


}
