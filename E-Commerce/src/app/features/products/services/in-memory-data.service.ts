import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/model/product';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(): any {
    const products = [

      { id: 1, category: 'Smartphone', title: 'Xiaomi Redmi 9', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61Wt%2B%2BW1WpL._AC_SL1000_.jpg', description: 'Più potenza per il tuo divertimento. Prestazioni potenti e stabili, multitasking fluido, esperienza audiovisiva e di gioco senza interruzioni.', price: 126, review: 4, brand: 'Xiaomi', status: true },

      { id: 2, category: 'Smartphone', title: 'Samsung Galaxy M31', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71zc55auIqL._AC_SL1500_.jpg', description: 'Con la batteria da 6.000 mAh di Galaxy M31 puoi guardare un film o videochiamare i tuoi amici senza rinunce', price: 279, review: 4, brand: 'Samsung', status: true },

      { id: 3, category: 'Smartphone', title: 'Huawei Nova 5t', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61t4kJyyBnL._AC_SL1000_.jpg', description: 'Un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 48 megapixel', price: 249, review: 3, brand: 'Huawei', status: true },

      { id: 4, category: 'Smartphone', title: 'Samsung Galaxy S10 Lite', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71uuJ7QI25L._AC_SL1500_.jpg', description: 'Colori prismatici, finitura opaca e design ergonomico per un Galaxy S10 Lite dal look classico e alla moda', price: 441, review: 5, brand: 'Samsung', status: true },

      { id: 5, category: 'Smartphone', title: 'Apple iPhone 11 (64GB)', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg', description: 'Spettacolare LCD Liquid Retina all-screen da 6,1. Resistenza all\'acqua fino a 2 metri per 30 minuti', price: 249, review: 5, brand: 'Apple', status: true },

      { id: 6, category: 'Laptop', title: 'Nuovo Apple MacBook Air', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71h5tyZqkhL._AC_SL1500_.jpg', description: 'Con MacBook Pro, il notebook raggiunge livelli mai visti di potenza, leggerezza e praticità.', price: 2143.90, review: 5, brand: 'Apple', status: false },

      { id: 7, category: 'Laptop', title: 'HP Elitebook 840 G2', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61j1sfm5F3L._AC_SL1126_.jpg', description: 'Non è sempre facile trovare il compromesso perfetto tra tradizione e innovazione - ma HP l\'ha fatto', price: 555, review: 3, brand: 'HP', status: false },

      { id: 8, category: 'Laptop', title: 'HUAWEI MateBook D', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61NCF56lnfL._AC_SL1000_.jpg', description: 'Con una potente architettura di sistema e capacità di software, il laptop offre lo schermo più grande e il peso più leggero possibile', price: 599, review: 4, brand: 'Huawei', status: false },

      { id: 9, category: 'Laptop', title: 'Lenovo ideapad S145', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/6136gwzwBXL._AC_SL1300_.jpg', description: 'Il design compatto e la sua leggerezza lo rendono il portatile perfetto per le attività di tutti i giorni', price: 442, review: 4, brand: 'Lenovo', status: false },

      { id: 10, category: 'Laptop', title: 'Acer Nitro 5 AN515-52-71ME', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71IGRnrBa0L._AC_SL1500_.jpg', description: 'Massima intensità a qualsiasi angolazione: colori realistici e display ips full HD da 15.6"', price: 1600, review: 4, brand: 'Acer', status: false },

      { id: 11, category: 'Smartphone', title: 'Xiaomi Redmi 9', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61Wt%2B%2BW1WpL._AC_SL1000_.jpg', description: 'Più potenza per il tuo divertimento. Prestazioni potenti e stabili, multitasking fluido, esperienza audiovisiva e di gioco senza interruzioni.', price: 126, review: 4, brand: 'Xiaomi', status: true },

      { id: 12, category: 'Smartphone', title: 'Samsung Galaxy M31', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71zc55auIqL._AC_SL1500_.jpg', description: 'Con la batteria da 6.000 mAh di Galaxy M31 puoi guardare un film o videochiamare i tuoi amici senza rinunce', price: 279, review: 4, brand: 'Samsung', status: true },

      { id: 13, category: 'Smartphone', title: 'Huawei Nova 5t', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61t4kJyyBnL._AC_SL1000_.jpg', description: 'Un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 48 megapixel', price: 249, review: 3, brand: 'Huawei', status: true },

      { id: 14, category: 'Smartphone', title: 'Samsung Galaxy S10 Lite', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71uuJ7QI25L._AC_SL1500_.jpg', description: 'Colori prismatici, finitura opaca e design ergonomico per un Galaxy S10 Lite dal look classico e alla moda', price: 441, review: 5, brand: 'Samsung', status: true },

      { id: 15, category: 'Smartphone', title: 'Apple iPhone 11 (64GB)', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg', description: 'Spettacolare LCD Liquid Retina all-screen da 6,1. Resistenza all\'acqua fino a 2 metri per 30 minuti', price: 249, review: 5, brand: 'Apple', status: true },

      { id: 16, category: 'Laptop', title: 'Nuovo Apple MacBook Air', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71h5tyZqkhL._AC_SL1500_.jpg', description: 'Con MacBook Pro, il notebook raggiunge livelli mai visti di potenza, leggerezza e praticità.', price: 2143.90, review: 5, brand: 'Apple', status: false },

      { id: 17, category: 'Laptop', title: 'HP Elitebook 840 G2', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61j1sfm5F3L._AC_SL1126_.jpg', description: 'Non è sempre facile trovare il compromesso perfetto tra tradizione e innovazione - ma HP l\'ha fatto', price: 555, review: 3, brand: 'HP', status: false },

      { id: 18, category: 'Laptop', title: 'HUAWEI MateBook D', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61NCF56lnfL._AC_SL1000_.jpg', description: 'Con una potente architettura di sistema e capacità di software, il laptop offre lo schermo più grande e il peso più leggero possibile', price: 599, review: 4, brand: 'Huawei', status: false },

      { id: 19, category: 'Laptop', title: 'Lenovo ideapad S145', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/6136gwzwBXL._AC_SL1300_.jpg', description: 'Il design compatto e la sua leggerezza lo rendono il portatile perfetto per le attività di tutti i giorni', price: 442, review: 4, brand: 'Lenovo', status: false },

      { id: 20, category: 'Laptop', title: 'Acer Nitro 5 AN515-52-71ME', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71IGRnrBa0L._AC_SL1500_.jpg', description: 'Massima intensità a qualsiasi angolazione: colori realistici e display ips full HD da 15.6"', price: 1600, review: 4, brand: 'Acer', status: false },

      { id: 21, category: 'Smartphone', title: 'Xiaomi Redmi 9', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61Wt%2B%2BW1WpL._AC_SL1000_.jpg', description: 'Più potenza per il tuo divertimento. Prestazioni potenti e stabili, multitasking fluido, esperienza audiovisiva e di gioco senza interruzioni.', price: 126, review: 4, brand: 'Xiaomi', status: true },

      { id: 22, category: 'Smartphone', title: 'Samsung Galaxy M31', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71zc55auIqL._AC_SL1500_.jpg', description: 'Con la batteria da 6.000 mAh di Galaxy M31 puoi guardare un film o videochiamare i tuoi amici senza rinunce', price: 279, review: 4, brand: 'Samsung', status: true },

      { id: 23, category: 'Smartphone', title: 'Huawei Nova 5t', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61t4kJyyBnL._AC_SL1000_.jpg', description: 'Un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 48 megapixel', price: 249, review: 3, brand: 'Huawei', status: true },

      { id: 24, category: 'Smartphone', title: 'Samsung Galaxy S10 Lite', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71uuJ7QI25L._AC_SL1500_.jpg', description: 'Colori prismatici, finitura opaca e design ergonomico per un Galaxy S10 Lite dal look classico e alla moda', price: 441, review: 5, brand: 'Samsung', status: true },

      { id: 25, category: 'Smartphone', title: 'Apple iPhone 11 (64GB)', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg', description: 'Spettacolare LCD Liquid Retina all-screen da 6,1. Resistenza all\'acqua fino a 2 metri per 30 minuti', price: 249, review: 5, brand: 'Apple', status: true },

      { id: 26, category: 'Laptop', title: 'Nuovo Apple MacBook Air', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71h5tyZqkhL._AC_SL1500_.jpg', description: 'Con MacBook Pro, il notebook raggiunge livelli mai visti di potenza, leggerezza e praticità.', price: 2143.90, review: 5, brand: 'Apple', status: false },

      { id: 27, category: 'Laptop', title: 'HP Elitebook 840 G2', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61j1sfm5F3L._AC_SL1126_.jpg', description: 'Non è sempre facile trovare il compromesso perfetto tra tradizione e innovazione - ma HP l\'ha fatto', price: 555, review: 3, brand: 'HP', status: false },

      { id: 28, category: 'Laptop', title: 'HUAWEI MateBook D', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61NCF56lnfL._AC_SL1000_.jpg', description: 'Con una potente architettura di sistema e capacità di software, il laptop offre lo schermo più grande e il peso più leggero possibile', price: 599, review: 4, brand: 'Huawei', status: false },

      { id: 29, category: 'Laptop', title: 'Lenovo ideapad S145', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/6136gwzwBXL._AC_SL1300_.jpg', description: 'Il design compatto e la sua leggerezza lo rendono il portatile perfetto per le attività di tutti i giorni', price: 442, review: 4, brand: 'Lenovo', status: false },

      { id: 30, category: 'Laptop', title: 'Acer Nitro 5 AN515-52-71ME', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71IGRnrBa0L._AC_SL1500_.jpg', description: 'Massima intensità a qualsiasi angolazione: colori realistici e display ips full HD da 15.6"', price: 1600, review: 4, brand: 'Acer', status: false },

      { id: 31, category: 'Smartphone', title: 'Xiaomi Redmi 9', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61Wt%2B%2BW1WpL._AC_SL1000_.jpg', description: 'Più potenza per il tuo divertimento. Prestazioni potenti e stabili, multitasking fluido, esperienza audiovisiva e di gioco senza interruzioni.', price: 126, review: 4, brand: 'Xiaomi', status: true },

      { id: 32, category: 'Smartphone', title: 'Samsung Galaxy M31', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71zc55auIqL._AC_SL1500_.jpg', description: 'Con la batteria da 6.000 mAh di Galaxy M31 puoi guardare un film o videochiamare i tuoi amici senza rinunce', price: 279, review: 4, brand: 'Samsung', status: true },

      { id: 33, category: 'Smartphone', title: 'Huawei Nova 5t', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61t4kJyyBnL._AC_SL1000_.jpg', description: 'Un prodotto con pochi competitor per ciò che riguarda la multimedialità grazie alla fotocamera da ben 48 megapixel', price: 249, review: 3, brand: 'Huawei', status: true },

      { id: 34, category: 'Smartphone', title: 'Samsung Galaxy S10 Lite', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71uuJ7QI25L._AC_SL1500_.jpg', description: 'Colori prismatici, finitura opaca e design ergonomico per un Galaxy S10 Lite dal look classico e alla moda', price: 441, review: 5, brand: 'Samsung', status: true },

      { id: 35, category: 'Smartphone', title: 'Apple iPhone 11 (64GB)', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/715HCLsOHbL._AC_SL1500_.jpg', description: 'Spettacolare LCD Liquid Retina all-screen da 6,1. Resistenza all\'acqua fino a 2 metri per 30 minuti', price: 249, review: 5, brand: 'Apple', status: true },

      { id: 36, category: 'Laptop', title: 'Nuovo Apple MacBook Air', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71h5tyZqkhL._AC_SL1500_.jpg', description: 'Con MacBook Pro, il notebook raggiunge livelli mai visti di potenza, leggerezza e praticità.', price: 2143.90, review: 5, brand: 'Apple', status: false },

      { id: 37, category: 'Laptop', title: 'HP Elitebook 840 G2', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61j1sfm5F3L._AC_SL1126_.jpg', description: 'Non è sempre facile trovare il compromesso perfetto tra tradizione e innovazione - ma HP l\'ha fatto', price: 555, review: 3, brand: 'HP', status: false },

      { id: 38, category: 'Laptop', title: 'HUAWEI MateBook D', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/61NCF56lnfL._AC_SL1000_.jpg', description: 'Con una potente architettura di sistema e capacità di software, il laptop offre lo schermo più grande e il peso più leggero possibile', price: 599, review: 4, brand: 'Huawei', status: false },

      { id: 39, category: 'Laptop', title: 'Lenovo ideapad S145', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/6136gwzwBXL._AC_SL1300_.jpg', description: 'Il design compatto e la sua leggerezza lo rendono il portatile perfetto per le attività di tutti i giorni', price: 442, review: 4, brand: 'Lenovo', status: false },

      { id: 40, category: 'Laptop', title: 'Acer Nitro 5 AN515-52-71ME', imgPath: 'https://images-na.ssl-images-amazon.com/images/I/71IGRnrBa0L._AC_SL1500_.jpg', description: 'Massima intensità a qualsiasi angolazione: colori realistici e display ips full HD da 15.6"', price: 1600, review: 4, brand: 'Acer', status: false },
    ];
    return { products };
  }
}
