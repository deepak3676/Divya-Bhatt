import { Component } from '@angular/core';
import { EmailJSResponseStatus, send } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();

    // Replace these three strings with your actual EmailJS credentials
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const PUBLIC_KEY = 'your_public_key';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        alert('Thank you! Your message has been sent successfully. ✨');
        (e.target as HTMLFormElement).reset(); // Clear form
      }, (error) => {
        alert('Oops! Something went wrong. Please try again later.');
        console.error('EmailJS Error:', error.text);
      });
  }

}
