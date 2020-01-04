import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SpendingComponent} from './components/spending/spending.component';
import {TransactionsComponent} from './components/transactions/transactions.component';
import {CategoriesComponent} from './components/categories/categories.component';

const routes: Routes = [
  {path: 'spending', component: SpendingComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: '**', component: SpendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
