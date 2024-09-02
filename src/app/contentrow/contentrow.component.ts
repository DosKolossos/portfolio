import { Component } from '@angular/core';
import { LandingpageComponent } from '../contentrow/landingpage/landingpage.component';
import { WhymeComponent } from '../contentrow/whyme/whyme.component';
import { MyskillsetComponent } from '../contentrow/myskillset/myskillset.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-contentrow',
  standalone: true,
  imports: [
    LandingpageComponent, 
    WhymeComponent, 
    MyskillsetComponent,
    ContactformComponent],
  templateUrl: './contentrow.component.html',
  styleUrl: './contentrow.component.scss'
})
export class ContentrowComponent {

}
