import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { DescriptionLimitPipe } from '../description-limit.pipe';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, CurrencyConversionPipe, DescriptionLimitPipe, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
	@Input() exchangeRate!: number;
	@Input() discount!: number;

	getDiscountColor(): string {
    const discountPercentage = this.discount;

    if (discountPercentage >= 70 && discountPercentage <= 100) {
      return '#F46359';
    } else if (discountPercentage >= 51 && discountPercentage <= 60) {
      return '#2E86AB';
    } else if (discountPercentage >= 30 && discountPercentage <= 50) {
      return '#F49D40';
    } else {
      return '#426E80'; 
    }
  }
}
