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
  private translateService = inject(TranslateService);

  comments: Comments[] = [];
  currentIndex: number = 0;
  private slideInterval: any;
  private isSliding: boolean = true;
  animationDirection: string = '';
  private restartTimeout: any;

  constructor() {
    this.startSlide();
  }

  showNext(): void {
    this.stopSlideTemporarily();
    this.animationDirection = 'left';
    if (this.comments.length > 0) {
      this.currentIndex = (this.currentIndex + 1) % this.comments.length;
    }
  }

  showPrevious(): void {
    this.stopSlideTemporarily();
    this.animationDirection = 'right';
    if (this.comments.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.comments.length) % this.comments.length;
    }
  }

  startSlide(): void {
    this.isSliding = true;
    this.slideInterval = setInterval(() => {
      if (this.isSliding && this.comments.length > 0) {
        this.showNext();
      }
    }, 10000);
  }

  stopSlide(): void {
    this.isSliding = false;
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.slideInterval = null;
    }
  }

  toggleSlide(): void {
    if (this.isSliding) {
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

  ngOnInit(): void {
    this.translateService.get('references.comments').subscribe((translation) => {
      // Die Struktur des Objekts ist { julian: {...}, sarah: {...}, alexander: {...} }
      // Wir müssen es in ein Array umwandeln
      this.comments = Object.values(translation); // Wandelt das Objekt in ein Array um
    });
  }
  
}
