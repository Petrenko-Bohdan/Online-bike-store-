import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { OrderComponent } from './order/order.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'shopping-cart', component: OrderComponent },
  {
    path: 'order',
    loadChildren: () =>
      import('./order/order.module').then((m) => m.OrderModule),
  },
  { path: '', component: ProductsComponent },
  {
    path: 'details-page/:id',
    component: DetailsPageComponent,
  },
  { path: 'thank-you', component: ThankYouComponent },
];
