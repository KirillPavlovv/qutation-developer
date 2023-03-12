import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from './shared/dropdown.directive';
import {QuotationListComponent} from './quotation-list/quotation-list.component';
import {NewQuotationComponent} from './new-quatation/new-quotation.component';
import {CompanyComponent} from './company/company.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {PersonComponent} from './company/person/person.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductListComponent} from './new-quatation/product-list/product-list.component';
import {ProductItemComponent} from './new-quatation/product-list/product-group/product-item/product-item.component';
import {ProductGroupComponent} from './new-quatation/product-list/product-group/product-group.component';
import {ProductsComponent} from './products/products.component';
import {NewProductModalComponent} from './products/new-product-modal/new-product-modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {CdkDropList} from "@angular/cdk/drag-drop";

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
    ProductsComponent,
    NewProductModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    CdkDropList
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
