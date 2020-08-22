import { InMemoryDbService} from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
createDb(){
  const products = [
    {id:1, title:"Xiaomi Redmi 9",imgPath:"https://images-na.ssl-images-amazon.com/images/I/61Wt%2B%2BW1WpL._AC_SL1000_.jpg",description:"Più potenza per il tuo divertimento. Prestazioni potenti e stabili, multitasking fluido, esperienza audiovisiva e di gioco senza interruzioni.",price:126,review:4},
    {id:2, title:"Samsung Galaxy M31",imgPath:"https://images-na.ssl-images-amazon.com/images/I/71zc55auIqL._AC_SL1500_.jpg",description:"Con la batteria da 6.000 mAh di Galaxy M31 puoi guardare un film o videochiamare i tuoi amici senza rinunce",price:279,review:4},
    {id:3, title:"Huawei Nova 5t",imgPath:"https://images-na.ssl-images-amazon.com/images/I/61t4kJyyBnL._AC_SL1000_.jpg",description:"Un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 48 megapixel ",price:249,review:3},
    {id:4, title:"Samsung Galaxy S10 Lite",imgPath:"https://images-na.ssl-images-amazon.com/images/I/71uuJ7QI25L._AC_SL1500_.jpg",description:"Colori prismatici, finitura opaca e design ergonomico per un Galaxy S10 Lite dal look classico e alla moda",price:441,review:5},
    {id:5, title:"Apple iPhone 11 (64GB)",imgPath:"https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg",description:"Spettacolare LCD Liquid Retina all-screen da 6,1. Resistenza all'acqua fino a 2 metri per 30 minuti",price:249,review:5},
  ];
  return {products};
}
}
