import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Product } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //items;
  cart$;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  clearCart(){
    this.cartService.clearCart();
  }

  async ngOnInit() {
    //this.items = this.cartService.getItems();
    this.cart$ = await this.cartService.getCart();
    console.log(this.cart$);
  }

}
