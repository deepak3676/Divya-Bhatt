import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component'; // Adjust path if needed
@Component({
  selector: 'app-contactpage',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './contactpage.component.html',
  styleUrl: './contactpage.component.scss'
})
export class ContactpageComponent {

}
