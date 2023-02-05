import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from './shared/dropdown.directive';
import { QuotationListComponent } from './quotation-list/quotation-list.component';
import { NewQuotationComponent } from './new-quatation/new-quotation.component';
import { CompanyComponent } from './company/company.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { PersonComponent } from './company/person/person.component';
import {HttpClientModule} from "@angular/common/http";
import { ProductListComponent } from './new-quatation/product-list/product-list.component';
import { ProductItemComponent } from './new-quatation/product-list/product-group/product-item/product-item.component';
import { ProductGroupComponent } from './new-quatation/product-list/product-group/product-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    QuotationListComponent,
    NewQuotationComponent,
    CompanyComponent,
    PersonComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
