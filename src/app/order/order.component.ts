import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CartItem, CartMaintenanceService } from '../cart-maintenance.service';


interface Step {
  label: string;
  formGroup: FormGroup;
}

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})

export class OrderComponent implements OnInit {
  currentStep: number = 1;
  steps: Step[] = [];
  form!: FormGroup;
	cartItems: any[] = [];

  constructor(private fb: FormBuilder,  private cartMaintenanceService: CartMaintenanceService) {}

  ngOnInit() {
		this.cartItems = this.cartMaintenanceService.cartItems;

    this.form = this.fb.group({
			products: this.cartItems,
			address: this.fb.group({
				country: ['', Validators.required],
				city: ['', Validators.required],
				street: [''],
			}),
			paymentMethod: [''],
			deliveryData: this.fb.group({
				data: [''],
				delivery: [null],
			}),
			summarizeInfo: [''],
		});

    this.steps = [
			{ label: 'products', formGroup: this.form.get('products') as FormGroup },
      { label: 'Address', formGroup: this.form.get('address') as FormGroup },
      {
        label: 'Payment Method',
        formGroup: this.form.get('paymentMethod') as FormGroup,
      },
      {
        label: 'Delivery data',
        formGroup: this.form.get('deliveryData') as FormGroup,
      },
			{label: 'Sum',
				formGroup: this.form.get('summarizeInfo') as FormGroup
			}
    ];

		this.form.get('deliveryData.delivery')?.valueChanges.subscribe(value =>{
			if(value==='today'||value==='tomorrow'){
				this.form.get('deliveryData.data')?.setValue('')
			}
		})

		this.form.get('deliveryData.data')?.valueChanges.subscribe(value=>{
			if(value){
				this.form.get('deliveryData.delivery')?.setValue('')
			}			
		})
		this.cartItems = this.cartMaintenanceService.cartItems;
  }

	onBack(){
		if(this.currentStep>1){
			this.currentStep--;
		}
	}

	onNext(){
		if(this.currentStep<this.steps.length){
			this.currentStep++;
		}
	}

	onSubmit(){
		console.log('Form submitted', this.form.value);
		
	}

	isCurrentStep(stepIndex: number): boolean{
		return this.currentStep === stepIndex;
	}

	addTooCart(item: CartItem) {
    this.cartMaintenanceService.addToCart = item;
    this.cartItems = this.cartMaintenanceService.cartItems;
  }

	deleteFromCart(item: CartItem) {
    this.cartMaintenanceService.deleteFromCart(item);
    this.cartItems = this.cartMaintenanceService.cartItems;
  }

	
}
