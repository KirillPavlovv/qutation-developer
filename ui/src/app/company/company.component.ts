import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {CustomerRegistrationRequest} from "./customerRegistrationRequest.model";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient) {
  }

  onSubmit(form: NgForm) {
    const customerRegistrationRequest = new CustomerRegistrationRequest(
      form.value.customer.companyName,
      form.value.customer.generalAddress,
      form.value.person.firstName,
      form.value.person.lastName,
      form.value.person.phoneNumber,
      form.value.person.email
    );
    this.http.post('http://localhost:8080/customer', customerRegistrationRequest)
      .subscribe(response => {
        console.log(response)
      })
    this.onCancel();
  }

  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
