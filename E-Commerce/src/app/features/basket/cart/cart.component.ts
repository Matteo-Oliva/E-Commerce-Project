import { Product } from './../../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  total(): void {
    return this.items.reduce(( total: any, item: any ) => {
      return total + item.price;
    }, 0);
  }

}
