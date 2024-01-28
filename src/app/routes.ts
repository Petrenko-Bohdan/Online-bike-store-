import { Routes } from '@angular/router';
import { DetailsPageComponent } from "./details-page/details-page.component";
import { ProductsComponent } from "./products/products.component";

const routeConfig: Routes = [
	{
		path: '',
		component: ProductsComponent,
	},
	{
		path: 'details-page/:id',
		component: DetailsPageComponent,
	}
];

export default routeConfig;