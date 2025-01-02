import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface Comments {
  name: string;
  comment: string;
  project: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})


export class ReferencesComponent implements OnInit {


  ngOnInit(): void {
    this.updateReferences();
    this.translateService.onLangChange.subscribe(() => {
      this.updateReferences();
    });
    this.startSlide(); // Starte automatisch das Sliden
  }

  pause: boolean = false;
  
  private translateService = inject(TranslateService);

  comments: Comments[] = [];
  currentIndex: number = 0;
  private slideInterval: any;
  isSliding: boolean = true;
  animationDirection: string = '';
  private restartTimeout: any;

  constructor() {
    this.startSlide();
  }


  showNext(): void {
    if (this.pause) return; // Wenn pausiert, tue nichts
    this.animationDirection = 'left';
    if (this.comments.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.comments.length;
    }
  }

  showPrevious(): void {
    if (this.pause) return; // Wenn pausiert, tue nichts
    this.animationDirection = 'right';
    if (this.comments.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    }
  }


  startSlide(): void {
    if (!this.isSliding || this.pause) return; // Starte nur, wenn Slider aktiv und nicht pausiert
    this.slideInterval = setInterval(() => {
      if (this.comments.length > 0) {
        this.showNext();
      }
    }, 10000); // Zeitintervall für den Slider
  }

  stopSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }


  toggleSlide(): void {
    this.pause = !this.pause; // Umschalten des Pause-Zustands
    if (this.pause) {
      this.stopSlide();
    } else {
      this.startSlide();
    }
  }


  stopSlideTemporarily(): void {
    this.stopSlide();
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout);
    }
    this.restartTimeout = setTimeout(() => {
      this.startSlide();
    }, 10000);
  }

  ngOnDestroy(): void {
    this.stopSlide();
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout);
    }
  }



  updateReferences(){
    this.translateService.get('references.comments').subscribe((translation) => {
      // Die Struktur des Objekts ist { julian: {...}, sarah: {...}, alexander: {...} }
      // Wir müssen es in ein Array umwandeln
      this.comments = Object.values(translation); // Wandelt das Objekt in ein Array um
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
