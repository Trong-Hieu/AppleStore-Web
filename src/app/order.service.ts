import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private db: AngularFireDatabase,
    private cartService: CartService,
    ) { }

  async storeOrder(order){
    let result = await this.db.list("/orders").push(order);
    this.cartService.clearCart();
    return result;
  }

}
