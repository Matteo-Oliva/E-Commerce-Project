import { ProductStatus } from './../../../shared/model/filter.enum';
import { Product } from 'src/app/shared/model/product';
import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './../services/products.service';
import { of, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: Array<Product>;
  originalproducts: Array<Product>;
  productStatus = ProductStatus;
  searchModel: string;
  statusModel: string;
  products$: Observable<Product[]>;
  private searchTerms = new Subject<string>();
  private route: ActivatedRoute;


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => { this.manageproducts(data) });
    this.getResult();
  }

  manageproducts(data) {
    this.products = data;
    this.originalproducts = data;
  }

  filterData(product: Product) {
    let bSearchInput = this.searchModel ? product.title.toLowerCase().includes(this.searchModel.toLowerCase()) || product.description.toLowerCase().includes(this.searchModel.toLowerCase()) : true;
    let bStatus = this.statusModel && this.statusModel === 'CELL' ? product.status === true : this.statusModel && this.statusModel === 'LAPTOP' ? product.status === false : true;

    return bSearchInput && bStatus;
  }

  productsearch(searchEvent: KeyboardEvent): void {
    of(searchEvent)
      .pipe(debounceTime(300), distinctUntilChanged(),
        map((event) => (event.target as HTMLInputElement).value)
      )
      .subscribe(searchTerm => {
        this.searchModel = searchTerm;
        this.products = this.originalproducts.filter(product => { return this.filterData(product) });
      });
  }

  onStatusChanged(event: any): void {
    this.statusModel = event.value && event.value === 'ALL' ? null : event.value;
    this.products = this.originalproducts.filter(product => { return this.filterData(product) })
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
  getResult(): void {
    this.products$ = this.searchTerms.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.searchProduct(term)),
    );
  }
}