import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-myskillset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskillset.component.html',
  styleUrl: './myskillset.component.scss'
})
export class MyskillsetComponent {

  logoTexts = [
    "Angular",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Rest-API",
    "Firebase",
    "GIT",
    "Scrum",
    "Material Design",
    "Challenge me",
  ]
  classes = [
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
    "hide-mobile",
  ]
  style = [
    "hide-mobile",
    "absolute-center",
  ]
  logoTextsMobile2ndArea=[
    "Material Design",
    "Challenge me",
  ]
}
