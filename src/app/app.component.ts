import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContentrowComponent } from './contentrow/contentrow.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ImprintComponent } from "./imprint/imprint.component";
import { PrivacyComponent } from "./privacy/privacy.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    ContentrowComponent,
    RouterOutlet,
    NavbarComponent,
    HeaderComponent,
    TranslateModule,
    RouterLink,
    RouterLinkActive, ImprintComponent, PrivacyComponent],
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

    // Save the new value to localStorage
    localStorage.setItem('contactMeUsed', JSON.stringify(this.contactMeUsed));

  }
  languages = ['en', 'de', 'lol'];

  ngOnInit(): void {
    const storedValue = localStorage.getItem('contactMeUsed');
    if (storedValue !== null) {
      this.contactMeUsed = JSON.parse(storedValue); // String zu boolean konvertieren
    }
    const defaultLang = localStorage.getItem('language') || 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }


  
  changeLanguage(lang: string){
    this.translateService.use(lang);
    localStorage.setItem('language', lang);

  }

  
}

