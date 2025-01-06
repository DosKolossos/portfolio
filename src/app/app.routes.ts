// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { ContentrowComponent } from './contentrow/contentrow.component';
import { ImprintComponent } from './imprint/imprint.component'; // Pfad anpassen
import { PrivacyComponent } from './privacy/privacy.component'; // Falls die PrivacyComponent existiert


export const routes: Routes = [
  { path: '', component: ContentrowComponent }, // Route für Content
  { path: 'imprint', component: ImprintComponent }, // Route für Impressum
  { path: 'privacy', component: PrivacyComponent }, // Route für Datenschutz
  { path: '**', component: ContentrowComponent }, // Fallback-Route für nicht definierte URLs

];
