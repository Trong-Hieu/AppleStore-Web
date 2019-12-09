import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {};
  cart: ShoppingCart;
  subsciption: Subscription;

  constructor(
    private cartService: CartService
  ) { }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();
    this.subsciption = cart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy(){
    this.subsciption.unsubscribe;
  }

  save (shipping){
    console.log(shipping);
    let order = {
      datePlaced: new Date().getTime(),
      shipping: this.shipping,
      item: this.cart.items.map(i => {
        return {
          product: {
            id: i.product.id,
            title: i.product.title,
            price: i.product.price,
            category: i.product.category,
            description: i.product.description,
            imageUrl: i.product.imageUrl
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })
    }
  }

}
