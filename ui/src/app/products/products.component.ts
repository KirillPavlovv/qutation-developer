import {Component} from '@angular/core';
import {Product} from "../new-quatation/product-list/product-group/product-item/product.model";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {NewProductModalComponent} from "./new-product-modal/new-product-modal.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: Product[];
  productGroups: Product[];

  constructor(private http: HttpClient, public matDialog: MatDialog) {
  }

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:8080/product-groups')
      .subscribe(productGroups => {
        this.productGroups = productGroups;
        console.log(this.productGroups)
      });
    this.http.get<Product[]>('http://localhost:8080/products')
      .subscribe(products => {
        this.products = products;
        console.log(this.products)
      });
  }

  addRow(product: Product) {
    this.products.push(product);
  }

  deleteRow(index: any) {
    this.products.splice(index, 1);
  }

  submit() {
    console.log(this.products)
  }

  openModal() {
    const dialogRef = this.matDialog.open(NewProductModalComponent)

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }
}
