import {Component, Input, OnInit} from '@angular/core';
import {Product} from "./product-item/product.model";

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  @Input() productGroup: Product;

  ngOnInit(): void {
  }


}
