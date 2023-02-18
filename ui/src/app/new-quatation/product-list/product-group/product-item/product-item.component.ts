import {Component} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  rows: any = []

  constructor() {
  }

  ngOnInit(): void {
    this.rows = [{
      name: '',
      email: '',
      mobno: ''
    }]
  }

  addRow() {
    let row = {name: "", email: "", mobno: ""};
    this.rows.push(row);
  }

  deleteRow(index: any) {
    this.rows.splice(index, 1);
  }

  submit() {
    console.log(this.rows)
  }
}
