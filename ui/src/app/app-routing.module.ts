import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NewProposalComponent} from "./new-proposal/new-proposal.component";
import {ProposalListComponent} from "./proposal-list/proposal-list.component";
import {CompanyComponent} from "./company/company.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/new-proposal', pathMatch: 'full'},
  {path: 'new-proposal', component: NewProposalComponent},
  {path: 'proposal-list', component: ProposalListComponent},
  {path: 'company', component: CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
