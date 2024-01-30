import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsPageComponent } from './details-page/details-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: ProductsComponent },
  {
    path: 'details-page/:id',
    component: DetailsPageComponent,
  }
];
