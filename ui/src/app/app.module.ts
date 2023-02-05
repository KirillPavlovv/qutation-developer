import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {DropdownDirective} from './shared/dropdown.directive';
import { ProposalListComponent } from './proposal-list/proposal-list.component';
import { NewProposalComponent } from './new-proposal/new-proposal.component';
import { CompanyComponent } from './company/company.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { PersonComponent } from './company/person/person.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    ProposalListComponent,
    NewProposalComponent,
    CompanyComponent,
    PersonComponent,
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
