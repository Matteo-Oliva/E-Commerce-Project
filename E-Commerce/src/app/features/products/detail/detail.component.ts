import { Product } from './../../../shared/model/product';
import { ProductsService } from './../services/products.service';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

product: Product;

 constructor(private productsService:ProductsService,
             private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getProduct():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productsService.getProduct(id)
    .subscribe(product => this.product = product)
 }
}
