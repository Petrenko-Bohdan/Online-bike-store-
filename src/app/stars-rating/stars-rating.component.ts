import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';


@Component({
  selector: 'app-stars-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './stars-rating.component.html',
  styleUrl: './stars-rating.component.scss',
})
export class StarsRatingComponent {
  faStar = faStar;

  @Input() rating: number = 0;
  @Input() readonly: boolean = false;

  setRating(value: number) {
    if (this.readonly) return;
    this.rating = value;
  }
}