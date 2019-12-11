import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { ShoppingCart } from '../models/shopping-cart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  //shipping = {};
  cart: ShoppingCart;
  userId: String;
  cartSubsciption: Subscription;
  userSubscription: Subscription;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    let cart$ = await this.cartService.getCart();
    this.cartSubsciption = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription =  this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubsciption.unsubscribe();
    this.userSubscription.unsubscribe()
  }

  async save (shipping){
    console.log(shipping);
    let order = {
      userId: this.userId,
      datePlaced: new Date().getTime(),
      shipping: shipping,
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
    };
    let result = await this.orderService.storeOrder(order);
    this.router.navigate(['order-success', result.key]);
  }

}
