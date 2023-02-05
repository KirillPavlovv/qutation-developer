import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewQuotationComponent} from "./new-quatation/new-quotation.component";
import {QuotationListComponent} from "./quotation-list/quotation-list.component";
import {CompanyComponent} from "./company/company.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/new-proposal', pathMatch: 'full'},
  {path: 'new-proposal', component: NewQuotationComponent},
  {path: 'proposal-list', component: QuotationListComponent},
  {path: 'company', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
