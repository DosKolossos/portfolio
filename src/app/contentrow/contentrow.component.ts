import { Component } from '@angular/core';
import { LandingpageComponent } from '../landingpage/landingpage.component';
import { WhymeComponent } from '../whyme/whyme.component';
import { MyskillsetComponent } from '../myskillset/myskillset.component';

@Component({
  selector: 'app-contentrow',
  standalone: true,
  imports: [LandingpageComponent, WhymeComponent, MyskillsetComponent],
  templateUrl: './contentrow.component.html',
  styleUrl: './contentrow.component.scss'
})
export class ContentrowComponent {

}
