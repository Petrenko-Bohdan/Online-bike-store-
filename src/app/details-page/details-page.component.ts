import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { DataService } from '../data.service';
import { DescriptionLimitPipe } from '../description-limit.pipe';
import { StarsRatingComponent } from '../stars-rating/stars-rating.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrencyConversionPipe } from '../currency-conversion.pipe';
import { RouterModule } from '@angular/router';
import { DescriptionLimitForProductPagePipe } from '../description-limit-for-product-page.pipe';

@Component({
  selector: 'app-details-page',
	standalone: true,
  imports: [CommonModule, RouterOutlet, DescriptionLimitPipe, FontAwesomeModule, StarsRatingComponent, CurrencyConversionPipe, RouterModule, DescriptionLimitForProductPagePipe],
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})

export class DetailsPageComponent implements OnInit {
  @Input() housingLocation!: HousingLocation;
	showFullDescription = false; 
	numReviews: number = 0;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    const housingLocationId = Number(this.route.snapshot.params['id']);
				
    this.dataService
      .getProductById(housingLocationId)
      .subscribe((location: HousingLocation) => {
        this.housingLocation = location;
      });
  }

	getAverageRating(): number {
    if (!this.housingLocation || !this.housingLocation.review || this.housingLocation.review.length === 0) {
      return 0; 
    }

		this.numReviews = this.housingLocation.review.length
    const totalRating = this.housingLocation.review.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / this.housingLocation.review.length;
  }



	toggleFullDescription() {
		this.showFullDescription = true;
	}

	toggleSmallDescription() {
		this.showFullDescription = false;
	}
}
