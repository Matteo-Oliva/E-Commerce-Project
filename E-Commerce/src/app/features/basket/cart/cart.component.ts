import { Product } from './../../../shared/model/product';
import { ProductsService } from './../../products/services/products.service';
import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  products:Product[] ;
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getItems();
  }

}
