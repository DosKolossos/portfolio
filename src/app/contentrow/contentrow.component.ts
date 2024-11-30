import { Component } from '@angular/core';
import { LandingpageComponent } from '../contentrow/landingpage/landingpage.component';
import { WhymeComponent } from '../contentrow/whyme/whyme.component';
import { MyskillsetComponent } from '../contentrow/myskillset/myskillset.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-contentrow',
  standalone: true,
  imports: [
    LandingpageComponent, 
    WhymeComponent, 
    MyskillsetComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactformComponent,
    FooterComponent],
  templateUrl: './contentrow.component.html',
  styleUrls: ['./contentrow.component.scss']
})
export class ContentrowComponent {

}
