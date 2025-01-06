import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';  
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink ],

  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent implements OnInit {
  private translateService = inject(TranslateService);
  constructor(private location: Location) {};
  translation: string = '';

  ngOnInit(): void {
    this.translateService.get('privacy').subscribe((translation) => {});
  }

}