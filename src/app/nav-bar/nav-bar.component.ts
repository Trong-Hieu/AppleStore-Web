import { Component, OnInit } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase';
// import { Observable } from 'rxjs/Observable';

import { CartService } from '../cart.service'
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //items;

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private cartService: CartService,
    private auth: AuthService
  ){ }

  async ngOnInit() {
    //this.items = this.cartService.getItems();

    // fix async infinity loop
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.cartService.getCart();

  }

  logout(){
    this.auth.logout();
  }

}
