import { ProductsService } from './../../products/services/products.service';
import { Product } from './../../../shared/model/product';
import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService:ProductsService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.getResult();
  }

  getResult():void{
  this.products$ = this.searchTerms.pipe(
    debounceTime(100),
    distinctUntilChanged(),
    switchMap((term: string) => this.productService.searchProduct(term)),
  );
}
}
