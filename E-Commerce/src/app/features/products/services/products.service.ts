import { Product } from './../../../shared/model/product';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map } from 'rxjs/internal/operators/map';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  private productsUrl = 'api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(id:number): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  searchProduct(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Product[]>(`${this.productsUrl}/?title=${term}`)
  }

  
  getProductOffers(numOfElements: number): Observable<Array<Product>> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      map(products => products.sort((a, b) => b.price - a.price).slice(20, numOfElements)));


}
}