import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }
 
 /*  itemProduct = JSON.parse(localStorage.getItem('itemProduct',this.items)) || []; */

  addToCart(product) {
    this.items.push(product);
  }

  getItems() { 
  return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

 
  
}
