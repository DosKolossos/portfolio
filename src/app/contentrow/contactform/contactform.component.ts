import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactform',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contactform.component.html',
  styleUrl: './contactform.component.scss'
})
export class ContactformComponent implements OnInit {
  

  http = inject(HttpClient);
  private translateService = inject(TranslateService);
  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  }

  mailTest = false;
  isSubmitted: boolean = false;
  contactMeUsed: boolean = false;

  post = {
    endPoint: 'https://david-kolosza.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  onSubmit(ngForm: NgForm) {
    console.log('Form data:', this.contactData);
    console.log('Form submitted:', ngForm);
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Response:', response);
            this.isSubmitted = true;
            this.contactMeUsed = true;
            ngForm.resetForm();
            this.hideSuccessMessageAfterDelay();
          },
          error: (error) => {
            console.error('Error sending form:', error);
          },
          complete: () => console.info('Send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.isSubmitted = true;
      this.contactMeUsed = true;
      ngForm.resetForm();
      this.hideSuccessMessageAfterDelay();
    }
  }
  

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
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
