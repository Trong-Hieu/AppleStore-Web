import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { products } from '../products'
import { ProductService } from '../product.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;
  id;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
  ) {
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.product = products[+params.get('id')];

      this.productService.get(this.id).pipe(take(1)).subscribe(p => {
        this.product = p;
    });
  }

}
