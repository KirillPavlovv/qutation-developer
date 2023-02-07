import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./product-item/product.model";

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {

  products: Product[];
  productGroups: Product[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:8080/product')
      .subscribe(products => {
        this.products = products;
        console.log(this.products)
      })
  }
}
