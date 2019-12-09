import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from './products';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ShoppingCart } from './models/shopping-cart';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private db: AngularFireDatabase,
  ) { }

  items = [];

  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object("/shopping-carts/" + cartId).valueChanges()
      .pipe(map(x => new ShoppingCart(x['items'])));
  }

  // async, await để tránh promise then
  async addToCart(product: Product){
    //this.items.push(product);
    let cartId = await this.getOrCreateCartId();

    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.id);

    item$.valueChanges().take(1).subscribe((item: any) => {
      if(item) item$.update({quantity: item.quantity + 1});
      else item$.set({product: product, quantity: 1});
      //item$.update({ product: product, quatity: (item.quatity || 0) + 1 });
      window.alert('Your product has been added to the cart');
    })
  }

  async removeFromCart(product: Product){
    let cartId = await this.getOrCreateCartId();

    let item$ = this.db.object('/shopping-carts/' + cartId + '/items/' + product.id);

    item$.valueChanges().take(1).subscribe((item: any) => {
      if(item) {
        item$.update({quantity: item.quantity -1});
        if (item.quantity === 1) item$.remove();
      }
      //else item$.set({product: product, quantity: 0});
    })
  }


  async clearCart(){
    //this.items = [];
    //return this.items;
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  private async getOrCreateCartId(){
    //this.cartService.addToCart(product);
    // user.uid
    let cartId = localStorage.getItem('cartId');

    if (!cartId){

      // tao cartId cho user
      let result = await this.create();
      // store new id in localstorage
      localStorage.setItem('cartId', result.key);
      return result.key;

    } else{
      return cartId;
    }
  }

}
