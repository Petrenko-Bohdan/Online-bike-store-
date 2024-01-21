import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { NgFor } from '@angular/common';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HousingLocationComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit, OnDestroy {
	exchangeRate: number = 1;

  data: any[]=[];
	private destroy$ = new Subject<void>();

	

  constructor(private dataService: DataService, private currencyService: CurrencyService) {}

  ngOnInit(): void {
		this.getCurrencyRate();
    this.loadData();
  }

  loadData(): void {
		this.dataService.getData()
		.pipe(takeUntil(this.destroy$))
		.subscribe((result)=>{
			this.data = result
		});

		this.data.forEach((product) => {
      this.dataService.getProductById(product.id).subscribe((productData) => {

        console.log(productData);		
			})
		});
  }

	ngOnDestroy(): void {
    this.destroy$.next();
		this.destroy$.complete();
  }

	private getCurrencyRate () {
    this.currencyService.getExchangeRate().subscribe((rate) => {
      this.exchangeRate = rate;
    });
  }

	
}
