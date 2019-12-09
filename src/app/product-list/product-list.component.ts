import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../products';

import { CartService } from '../cart.service';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  //products = products;

  //product;
  //products$;
  products: Product[] = [];
  dtTrigger: Product;
  category$;
  category: string;
  filteredProducts: Product[] = [];
  cart: any;
  cart$: Observable<ShoppingCart>;
  subscription: Subscription;
  //subscription: Subscription;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    route: ActivatedRoute,
    categoryService: CategoryService,
  ) {

    //this.products$ = productService.getAll();
    this.productService.getAll().subscribe(products => {
      this.products = products.map((element) => {
        return new Product(
          element.id,
          element.title['title'],
          element.title['price'],
          element.title['category'],
          element.title['description'],
          element.title['imageUrl']
        )
      });
      //console.log("all products: " + this.products);
      //this.dtTrigger.next();
      route.queryParamMap.subscribe(params => {
        this.category = params.get('category');
        //console.log(this.category);

        this.filteredProducts = (this.category) ?
          this.products.filter(products =>
            products.category === this.category
          )  :
          this.products;
        console.log(this.filteredProducts);
      });
    });
    this.category$ = categoryService.getCategories().snapshotChanges();

  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }

  getQuantity(product: Product){
    //console.log("product: " + product.id);
    if(!this.cart) return 0;

    let item = this.cart.itemsMap[product.id];
    return item ? item.quantity : 0;

  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  async ngOnInit(){
    this.subscription = (await this.cartService.getCart())
      .subscribe(cart => this.cart = cart);
    // this.cart$ = await this.cartService.getCart();
    //   console.log("cart: " + this.cart$);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }


}
