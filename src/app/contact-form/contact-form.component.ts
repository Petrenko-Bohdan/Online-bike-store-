import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
	contacts = {
		firstName: '',
		sureName: '',
		email: '',
		description: ''
	}
	
	onSubmit(){

	}
}
