import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-whyme',
  standalone: true,
  imports: [
    TranslateModule, 
    CommonModule
  ],
  templateUrl: './whyme.component.html',
  styleUrl: './whyme.component.scss'
})
export class WhymeComponent implements OnInit {
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.get('whyMe').subscribe((translation) => {
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
 