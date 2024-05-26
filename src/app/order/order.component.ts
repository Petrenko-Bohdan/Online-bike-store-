import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartItem, CartMaintenanceService } from '../cart-maintenance.service';
import { Router } from '@angular/router';
import { ThankYouComponent } from '../thank-you/thank-you.component';



interface Step {
  label: string;
  formGroup: FormGroup;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ThankYouComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  currentStep: number = 1;
  steps: Step[] = [];
  form!: FormGroup;
  cartItems: any[] = [];
  isFormSubmitted: boolean = false;
	showThankYou: boolean = false;

  constructor(
    private fb: FormBuilder,
    private cartmaintenceServise: CartMaintenanceService,
		private router: Router
  ) {}

  ngOnInit() {
    this.cartItems = this.cartmaintenceServise.cartItems;

    this.form = this.fb.group({
      products: this.cartItems,
      address: this.fb.group({
        country: ['', Validators.required,],
        city: ['', Validators.required,],
        street: ['', Validators.required,],
      }),
      paymentMethod: ['', Validators.required],
      deliveryData: this.fb.group({
				data: ['', Validators.required],
				delivery: ['', Validators.required],
			}),
      summarizeInfo: [''],
    });
    this.steps = [
      { label: 'prodcts', formGroup: this.form.get('products') as FormGroup },
      { label: 'address', formGroup: this.form.get('address') as FormGroup },
      {
        label: 'payment method',
        formGroup: this.form.get('paymentMethod') as FormGroup,
      },
      {
        label: 'delivery data',
        formGroup: this.form.get('deliveryData') as FormGroup,
      },
      { label: 'sum', formGroup: this.form.get('summarizeInfo') as FormGroup },
    ];
				
		this.form.get('deliveryData.data')?.valueChanges.subscribe((value) => {
      if (value === 'today' || value === 'tomorrow') {
        this.form.get('deliveryData.delivery')?.setValue('');
      }
    });

    this.form.get('deliveryData.delivery')?.valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('deliveryData.data')?.setValue('');
      }
    });

		this.form.get('deliveryData.data')?.valueChanges.subscribe(value=>{
			const deliveryControl = this.form.get('deliveryData.delivery');
			const dataControl = this.form.get('deliveryData.data');

			if(value === 'today' || value === 'tomorrow'){
				deliveryControl?.clearValidators();
			} else{
				deliveryControl?.setValidators([Validators.required]);
				dataControl?.setValidators([])
			}
			deliveryControl?.updateValueAndValidity()
		})

    this.cartItems = this.cartmaintenceServise.cartItems;
  }

  onBack() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onNext() {
    if (this.currentStep < this.steps.length) {
      this.currentStep++;
    }
  }

  onSubmit() {
    console.log('Form submitted', this.form.value);
		this.showThankYou = true;
		setTimeout(()=>{
			this.router.navigateByUrl('/')
		},1500)
  }

	isCurrentStep(stepIndex: number): boolean{
		return this.currentStep===stepIndex;
	}

	addTooCart(item: CartItem){
		this.cartmaintenceServise.addToCart = item;
		this.cartItems = this.cartmaintenceServise.cartItems;
	}

	deleteFromCart(item: CartItem){
		this.cartmaintenceServise.deleteFromCart(item);
		this.cartItems = this.cartmaintenceServise.cartItems;
	}

	isCurrentStepValid(): boolean{
		const currentFormGroup = this.steps[this.currentStep - 1].formGroup;
		return currentFormGroup.valid
	}

	isInvalid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control && control.invalid && (control.dirty || control.touched);
	}
}
