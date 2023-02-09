import { Component } from '@angular/core';
import {Product} from "./product-group/product-item/product.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[];
  productGroups: Product[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:8080/product')
      .subscribe(products => {
        this.products = products;
        console.log(this.products)
      });
  }
}
