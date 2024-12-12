import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() languages: string[] = [];
  @Output() languageChange = new EventEmitter<string>();

  // Variable zur Speicherung der aktuellen Sprache
  currentLanguage: string = 'en'; // Standardmäßig auf 'en' (Englisch) gesetzt

  changeLanguage(lang: string) {
    this.currentLanguage = lang; // Setze die aktive Sprache
    this.languageChange.emit(lang); // Emitiere das Ereignis, um die Änderung zu melden
  }
}
