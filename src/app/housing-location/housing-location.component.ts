import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { DescriptionLimitPipe } from '../description-limit.pipe';




@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, CurrencyConversionPipe, DescriptionLimitPipe],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
	@Input() exchangeRate!: number;
}
