import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {MAT_DATE_FORMATS} from '@angular/material';
import {ExpenseService} from './services/expense.service';
import {HttpClientModule} from '@angular/common/http';
import { SpendingComponent } from './components/spending/spending.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { CategoriesComponent } from './components/categories/categories.component';
import {DatePipe} from '@angular/common';

export const DATE_FORMAT = {
    parse: {
      dateInput: ['l', 'LL'],
    },
    display: {
      dateInput: 'L',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
    },
  };

@NgModule({
  declarations: [
    AppComponent,
    SpendingComponent,
    TransactionsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ExpenseService, {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT}, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
