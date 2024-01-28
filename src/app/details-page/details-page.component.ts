import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})

export class DetailsPageComponent {
	route: ActivatedRoute = inject(ActivatedRoute);
  dataService = inject(DataService);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.dataService.getHousingLocationById(housingLocationId);
  }
}