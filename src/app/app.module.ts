import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
//import { DataTableModule } from 'angular-4-data-table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { MyOrderComponent } from './my/my-order/my-order.component';
import { CartService } from './cart.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { OrderService } from './order.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    MyOrderComponent,
    ProductFormComponent,
    ProductQuantityComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    //DataTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent},
      { path: 'products/:id', component: ProductDetailComponent},
      { path: 'cart', component: CartComponent},
      { path: 'login', component: LoginComponent },

      // protect
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/orders', component: MyOrderComponent, canActivate: [AuthGuardService] },

      // protect

      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AdminAuthGuardService] },
    ])
  ],
  providers: [
    CartService,
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
