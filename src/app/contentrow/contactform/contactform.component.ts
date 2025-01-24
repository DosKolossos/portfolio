import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent implements OnInit {
  private translateService = inject(TranslateService);

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }
  @Output() contactMeUsedChange = new EventEmitter<boolean>();
  isSubmitted: boolean = false;
  contactMeUsed: boolean = false;
  privacyOpen: boolean = false;
  imprintOpen: boolean = false;

  // post = {
  //   endPoint: 'https://david-kolosza.de/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };
  post = {
    endPoint: 'https://david-kolosza.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Nur Content-Type setzen
      }),
    },
  };
  
  
  getEmailPlaceholder(emailInvalid: boolean, emailTouched: boolean): string {
    return emailInvalid && emailTouched
      ? this.translateService.instant('contactform.emailRequired')
      : this.translateService.instant('contactform.emailPlaceholder');
  }

  getMessagePlaceholder(messageInvalid: boolean, messageTouched: boolean): string {
    return messageInvalid && messageTouched
      ? this.translateService.instant('contactform.messageRequired')
      : this.translateService.instant('contactform.messagePlaceholder');
  }


  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid) {
  //     this.http.post(this.post.endPoint, this.contactData, this.post.options)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('Response:', response);
  //           this.isSubmitted = true;
  //           this.contactMeUsed = true;
  //           this.contactMeUsedChange.emit(this.contactMeUsed);
  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error('Error sending form:', error);
  //           alert(`Error: ${error.message}`);
  //         },
  //         complete: () => console.info('Send post complete'),
  //       });
  //   }
  // }
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      console.log('Sending contact data:', this.contactData);
  
      fetch(this.post.endPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.contactData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Response:', data);
          this.isSubmitted = true;
          this.contactMeUsed = true;
          this.contactMeUsedChange.emit(this.contactMeUsed);
          ngForm.resetForm();
        })
        .catch((error) => {
          console.error('Error sending form:', error);
          alert(`Error: ${error.message}`);
        });
    }
  }
  
  

  togglePrivacy(){
    this.privacyOpen = !this.privacyOpen;
  }

  toggleImprint(){
    this.imprintOpen = !this.imprintOpen;
  }
  

  constructor(private router: Router) {}
  hideSuccessMessage() {
    this.isSubmitted = false;
  
    // Navigiere zum Root-Pfad ('')
    this.router.navigate(['']);
    this.scrollToElement('landingpage')
  }

  ngOnInit(): void {
    this.translateService.get('contactform').subscribe((translation) => {});
  }

  isMenuOpen = false; // Standard: Menü geschlossen

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Umschalten des Zustands

  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start'});
    }
    this.isMenuOpen = false; // Schließen des Menüs nach Navigation
    this.toggleMenu();

  }
  
}
