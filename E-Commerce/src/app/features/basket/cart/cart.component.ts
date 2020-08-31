import { Product } from './../../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[];
  items;
  

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
 

}


