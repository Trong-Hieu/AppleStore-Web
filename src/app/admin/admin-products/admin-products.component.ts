import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs/Subscription';
import { Product } from 'src/app/products';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[];
  subscription: Subscription;
  //tableResource: DataTableResource<Product>;
  //items: Product[];
  //itemCount: number;
  dtTrigger: Product;

  constructor(
    private productService: ProductService,
  ) {
    // this.subscription = this.productService.getAll().subscribe(products =>{
    //   this.filteredProducts = this.products = products;

    //   //this.initializeTable(products);
    // });
    this.subscription = this.productService.getAll().subscribe(products => {
      this.filteredProducts = products.map(element => {
        return new Product(
          element.id,
          element.title['title'],
          element.title['price'],
          element.title['category'],
          element.title['desciption'],
          element.title['imageUrl']
        );
      });
      console.log("all products: " + this.products);
      this.products = this.filteredProducts;
      this.dtTrigger.next();
    });

  }

  // Khởi tạo bảng
  // private initializeTable(products: Product[]){

  //   this.tableResource = new DataTableResource(products);
  //   this.tableResource.query({ offset: 0 })
  //     .then(items => this.items = items);
  //   this.tableResource.count()
  //     .then(count => this.itemCount = count);

  // }

  // reloadItems(params){
  //   if(!this.tableResource) return;

  //   this.tableResource.query(params)
  //     .then(items => this.items = items);
  // }

  //search
  filter(query: string){
    console.log(query);
    this.filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }



}

