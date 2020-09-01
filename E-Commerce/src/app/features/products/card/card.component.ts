import { Component, OnInit, Input } from '@angular/core';
import { Product } from './../../../shared/model/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  whatCategory(product: Product): string {
    return product.status ? 'Cellulari' : 'Laptop';
  }

  statusClass(product: Product): any {
    return {
      cell: product.status,
      laptop: !product.status
    };
  }
}

