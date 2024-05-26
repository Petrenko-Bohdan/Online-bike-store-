import { CommonModule, JsonPipe } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, JsonPipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

	isFormSubmitted: boolean = false;

	contacts: any  = {
		firstName: '',
		sureName: '',
		email: '',
		description: ''
	}
	
	onSubmit(form: NgForm){
		debugger;
		const isFormValid = form.form.valid;
		this.isFormSubmitted = true;
	}
}
