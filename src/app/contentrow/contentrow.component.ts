import { Component, Output, EventEmitter, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { LandingpageComponent } from '../contentrow/landingpage/landingpage.component';
import { WhymeComponent } from '../contentrow/whyme/whyme.component';
import { MyskillsetComponent } from '../contentrow/myskillset/myskillset.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';



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
    ],

  templateUrl: './contentrow.component.html',
  styleUrls: ['./contentrow.component.scss']
})
export class ContentrowComponent implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  

  ngAfterViewInit() {
    setTimeout(() => {
      const footer = this.el.nativeElement.querySelector('app-footer');
  
      if (!footer) {
        return;
      }
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.renderer.setStyle(footer, 'display', 'flex');
          } else {
            this.renderer.setStyle(footer, 'display', 'none');
          }
        },
        { threshold: 1.0 }
      );
  
      observer.observe(this.el.nativeElement);
  
      console.log('Footer observed:', footer);
    }, 0);
  }
  

  @Output() contactMeUsedChange = new EventEmitter<boolean>();

  onContactMeUsedChange(newValue: boolean) {
    this.contactMeUsedChange.emit(newValue);
    console.log('onContactMeUsedChange propagated to parent:', newValue);
}

  isMenuOpen = false; // Standard: Menü geschlossen

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Umschalten des Zustands

  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }

}
