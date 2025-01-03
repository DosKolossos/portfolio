import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  privacyOpen: boolean = false;
  imprintOpen: boolean = false;
  
  togglePrivacy(){
    this.privacyOpen = !this.privacyOpen;
  }

  toggleImprint(){
    this.imprintOpen = !this.imprintOpen;
  }
}
 