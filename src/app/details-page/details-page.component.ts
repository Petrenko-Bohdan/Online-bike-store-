import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingLocation } from '../housinglocation';
import { DataService } from '../data.service';
import { DescriptionLimitPipe } from '../description-limit.pipe';


@Component({
  selector: 'app-details-page',
	standalone: true,
  imports: [ DescriptionLimitPipe],
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {
  housingLocation: HousingLocation | undefined;

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
}
