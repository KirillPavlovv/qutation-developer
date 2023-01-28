import {Component, OnInit} from '@angular/core';
import {Customer} from "./company.model";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
 customer: Customer;


  onSubmit() {
    console.log(this.customer)
  }

  ngOnInit(): void {
  }

}
