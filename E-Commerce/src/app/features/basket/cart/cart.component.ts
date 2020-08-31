import { Product } from './../../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Identifiers } from '@angular/compiler';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:Product[] ;
  items;
  itemQuantity = 1;
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


plus = function(item) {
  item = item++;
}

minus = function(item) {
  item = item--;
}

add(product){

  this.items.push(product)
}

total() {
  return this.items.reduce((total, item) => total + item.price, 0);
}

addQuantity(){

    this.itemQuantity++;
}

}


