import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../cart.service';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  cart: any;
  cart$: Observable<ShoppingCart>;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }


  async ngOnInit(){
    // this.subscription = (await this.cartService.getCart())
    //   .subscribe(cart => this.cart = cart);
    //   console.log("cart: " + this.cart);
    this.cart$ = await this.cartService.getCart();
  }


}
