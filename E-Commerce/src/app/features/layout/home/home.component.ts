import { ProductsService } from './../../products/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  product:Product;

  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
  }
}
