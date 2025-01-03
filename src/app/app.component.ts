import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContentrowComponent } from './contentrow/contentrow.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    ContentrowComponent, 
    RouterOutlet, 
    NavbarComponent, 
    HeaderComponent,
    TranslateModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService
  ) {}

  contactMeUsed: boolean = false;

  updateContactMeUsed(newValue: boolean) {
    this.contactMeUsed = newValue;
    console.log('contactMeUsed updated:', this.contactMeUsed);

    // Save the new value to localStorage
    localStorage.setItem('contactMeUsed', JSON.stringify(this.contactMeUsed));

    // Falls aktiviert, Sprache auf "LoL" umstellen
    // if (this.contactMeUsed) {
    //   this.changeLanguage('lol');
    // }
  }
  languages = ['en', 'de', 'lol'];

  ngOnInit(): void {
    this.languages.forEach(lang => {
      this.translateService.getTranslation(lang).subscribe({
        next: () => console.log(`${lang} language file preloaded.`),
        error: (err) => console.error(`Error preloading ${lang} language file:`, err),
      });
    });
  
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }


  
  changeLanguage(lang: string){
    this.translateService.use(lang);
    localStorage.setItem('language', lang);

  }

  
}

