import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NewProposalComponent} from "./new-proposal/new-proposal.component";
import {ProposalListComponent} from "./proposal-list/proposal-list.component";
import {CompanyComponent} from "./company/company.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/new-proposal', pathMatch: 'full'},
  {
    path: 'recipes', component: RecipesComponent, children: [
      {path: ':id', component: RecipeDetailComponent},
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
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
