import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ContentrowComponent } from './contentrow/contentrow.component';
import { WhymeComponent } from './whyme/whyme.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    ContentrowComponent, 
    RouterOutlet, 
    NavbarComponent, 
    LandingpageComponent, 
    HeaderComponent,
  WhymeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
