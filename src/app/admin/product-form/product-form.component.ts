import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { take } from 'rxjs/operators';



@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  // observable
  categories$;
  product = {};

  // id$;
  id;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    // Load dữ liệu product tương ứng với id của nó bằng cách load component chứa
    // thông tin của route hiện tại. id được load từ trang url trc
    private route: ActivatedRoute,
  ) {
    this.categories$ = categoryService.getCategories().snapshotChanges();
    console.log(this.categories$);

    this.id = route.snapshot.paramMap.get('id');
    // let id = route.paramMap.subscribe(params => {
    //   this.product = productService.getAll()[+params.get('id')];
    // })
    if(this.id){
      this.productService.get(this.id).take(1).subscribe(p => {
        this.product = p;
        console.log("p: " + p);
      });
      console.log("id: " + this.id);
      console.log("product: " + this.product);

      // this.product$ = productService.get(id).valueChanges().take(1);
      // console.log(this.product$);

    }
  }

  save(product){

    if(this.id){
      this.productService.update(this.id, product);
    }
    else{
      this.productService.create(product);
    }

    console.log(product);
    // sau khi save sản phẩm thì điều hướng trở lại trang admin-products
    this.router.navigate(['/admin/products']);
  }

  delete(){
    if (!confirm("Are you sure to want to delete?")) return;

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {

  }

}
