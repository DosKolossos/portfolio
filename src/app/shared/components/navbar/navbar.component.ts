import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
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
