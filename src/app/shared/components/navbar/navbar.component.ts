import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  @Input() contactMeUsed: boolean = false;
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
    @Input() languages: string[] = [];
    @Output() languageChange = new EventEmitter<string>();
  
    // Variable zur Speicherung der aktuellen Sprache
    currentLanguage: string = 'en'; // Standardmäßig auf 'en' (Englisch) gesetzt
  
    changeLanguage(lang: string) {
      this.currentLanguage = lang; // Setze die aktive Sprache
      this.languageChange.emit(lang); // Emitiere das Ereignis, um die Änderung zu melden
    }
}
