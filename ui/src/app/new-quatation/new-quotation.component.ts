import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-new-proposal',
  templateUrl: './new-quotation.component.html',
  styleUrls: ['./new-quotation.component.css']
})
export class NewQuotationComponent implements OnInit{

  @ViewChild('companyInput') companyInputRef: ElementRef;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  openCompanyForm() {
    this.router.navigate(['newCompany'], {relativeTo: this.route})
  }

}
