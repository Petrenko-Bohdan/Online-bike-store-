import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
	img: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartMaintenanceService {
  private items: CartItem[] = [];

  constructor() {}

  get cartItems(): CartItem[] {
    return this.items;
  }

  set addToCart(item: CartItem) {
    this.items = [...this.items, item];
  }

  deleteFromCart(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  clearCart() {
    this.items = [];
  }
}
