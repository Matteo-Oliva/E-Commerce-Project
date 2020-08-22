import { Component, OnInit } from '@angular/core';
import { Product } from './../../../shared/model/product';
import { ProductsService } from './../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products:Product[] ;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct():void {
     this.productsService.getProducts().subscribe(products => this.products = products);


}
}