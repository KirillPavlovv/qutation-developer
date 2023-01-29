import {Component, OnInit} from '@angular/core';
import {Customer} from "./company.model";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  customer: Customer;

  constructor(private route: ActivatedRoute,
              private router: Router) {
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
