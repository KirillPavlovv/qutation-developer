import {Component} from '@angular/core';
import {Product} from "./product.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  // products: Product[];
  // newAttribute: any = {};
  //
  // constructor(private http: HttpClient) {
  // }
  //
  // ngOnInit(): void {
  //   this.http.get<Product[]>('http://localhost:8080/product')
  //     .subscribe(products => {
  //       this.products = products;
  //       console.log(this.products)
  //     });
  // }
  //
  // addFieldValue() {
  //   this.products.push(this.newAttribute)
  //   this.newAttribute = {};
  // }
  //
  //
  // deleteFieldValue(index) {
  //   this.products.splice(index, 1);
  // }

  rows:any = []
  constructor() { }
  ngOnInit(): void {
    this.rows = [{
      name:'',
      email:'',
      mobno:''
    }]
  }
  addRow() {
    let row = {name: "", email: "",mobno:""};
    this.rows.push(row);
  }
  deleteRow(index:any) {
    this.rows.splice(index, 1);
  }
  submit(){
    console.log(this.rows)
  }
}
