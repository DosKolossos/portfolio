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
export class ReferencesComponent implements OnInit{
  private translateService = inject(TranslateService);
  comments: Comments[] = [
    {
      name: "Julian Wünkhaus",
      comment: "David consistently demonstrates reliability and a strong sense of collaboration, making him a valuable asset to any team. His positive mindset brings a sense of optimism and motivation to those around him. Beyond his professional qualities, David is also someone who is easy to get along with, making him the type of colleague you'd genuinely enjoy sharing a beer with after work.",
      // "David beweist stets Zuverlässigkeit und einen ausgeprägten Sinn für Zusammenarbeit, was ihn zu einer wertvollen Bereicherung für jedes Team macht. Seine positive Denkweise verleiht seinem Umfeld ein Gefühl von Optimismus und Motivation. Neben seinen fachlichen Qualitäten ist David auch jemand, mit dem man sich gut versteht und mit dem man gerne ein Bier nach der Arbeit trinkt.",
      project: "Project Join and more",
    },
    {
      name: "Sarah Schneider",
      comment: "David always worked very precisely in our group work and paid attention to every detail. With his sense of humor, he regularly put the team in a good mood. His open and active communication was a great help in keeping everyone on the same page.",
      // "David hat in unserer Gruppenarbeit immer sehr genau gearbeitet und auf jede Feinheit geachtet. Mit seinem Humor hat er regelmäßig für gute Laune im Team gesorgt. Seine offene und aktive Kommunikation war dabei eine große Hilfe, um alle auf dem gleichen Stand zu halten.",
      project: "Project Join",
    },
    {
      name: "Alexander Sinner",
      comment: "It was a pleasure to work with David. He not only brings excellent programming skills, but also an open and collaborative attitude that makes teamwork much easier. His ability to quickly analyze complex problems and propose effective solutions has been instrumental in moving our project forward.",
      // "Es war eine Freude, mit David zusammenzuarbeiten. Er bringt nicht nur exzellente Programmierfähigkeiten mit, sondern auch eine offene und kooperative Einstellung, die die Zusammenarbeit im Team enorm erleichtert. Seine Fähigkeit, komplexe Probleme schnell zu analysieren und effektive Lösungen vorzuschlagen, hat unser Projekt maßgeblich vorangebracht.",
      project: "Project Join",
    }
  ];

  currentIndex: number = 0;
  private slideInterval: any;
  private isSliding: boolean = true;
  animationDirection: string = ''; // 'left' or 'right'
  private restartTimeout: any;

  constructor() {
    this.startSlide();
  }

  showNext(): void {
    this.stopSlideTemporarily(); // Stop automatic sliding temporarily
    this.animationDirection = 'left';
    this.currentIndex = (this.currentIndex + 1) % this.comments.length;
  }

  showPrevious(): void {
    this.stopSlideTemporarily(); // Stop automatic sliding temporarily
    this.animationDirection = 'right';
    this.currentIndex =
      (this.currentIndex - 1 + this.comments.length) % this.comments.length;
  }

  startSlide(): void {
    this.isSliding = true;
    this.slideInterval = setInterval(() => {
      if (this.isSliding) {
        this.showNext();
      }
    }, 10000); // alle 10 Sekunden wechseln
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
    // Clear any existing timeout to avoid multiple timers running
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout);
    }

    // Restart sliding after 10 seconds
    this.restartTimeout = setTimeout(() => {
      this.startSlide();
    }, 10000);
  }

  ngOnDestroy(): void {
    this.stopSlide(); // Sicherstellen, dass der Timer beim Verlassen des Components gelöscht wird
    if (this.restartTimeout) {
      clearTimeout(this.restartTimeout);
    }
  }
  ngOnInit(): void {
    this.translateService.get('references').subscribe((translation) => {
    });
  }
}

