import { Component, OnInit, inject } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core'
import AOS from 'aos';
import { CommonModule } from '@angular/common';
import { AfterViewChecked } from '@angular/core';

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
export class WhymeComponent implements OnInit, AfterViewChecked {
  ngAfterViewChecked(): void {
    AOS.refresh(); // Aktualisiert AOS bei DOM-Änderungen
  }
  private translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.get('whyMe').subscribe((translation) => {
    });
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
      element.scrollIntoView({ behavior: 'smooth', inline: 'start'});
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }
}
 