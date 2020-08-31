import { Product } from 'src/app/shared/model/product';
import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor() { }

  addToCart(product) {
    // this.items.push(product);
    this.manageUserCart(product, false, false);
  }

  getItems() {
    return this.manageUserCart(null, false, true);
  }

  clearCart() {
    return this.manageUserCart(null, false, false);
  }

  removeFromCart(product) {
    return this.manageUserCart(product, true, false);
  }

  manageUserCart(product, isRemove, getItems) {
    
    let userLogged = JSON.parse(localStorage.getItem('user'));
    let users = JSON.parse(localStorage.getItem('users'));
    if (!getItems) {
      let cart = [];
      users.forEach(user => {
        if (userLogged.id == user.id) {
          if (product) {
            user.cart = user.cart || [];
            if (isRemove) {
              let id = user.cart.map(prod => prod.id).indexOf(product.id)
              user.cart.splice(id, 1)
            } else {
              user.cart.push(product);
            }
          } else {
            user.cart = [];
          }
          cart = user.cart;
        }
      });
      localStorage.setItem('users', JSON.stringify(users));
      return cart;

    } else {

      let userStorage = users.filter(user => userLogged.id == user.id);
      if (userStorage && userStorage.length > 0) {
        return userStorage[0].cart || [];
      } else {
        return [];
      }

    }
  }
}
