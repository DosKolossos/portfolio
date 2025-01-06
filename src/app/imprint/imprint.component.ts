import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';  
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterLink],

  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent implements OnInit {
  private translateService = inject(TranslateService);
  constructor(private location: Location) {};
  translation: string = '';

  ngOnInit(): void {
    this.translateService.get('imprint').subscribe((translation) => {
    });
  }
}
