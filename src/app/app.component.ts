import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';

  links = [{path: 'spending', label: 'SPENDING'}, {path: 'transactions', label: 'TRANSACTIONS'}, {path: 'categories', label: 'CATEGORIES'}];
  // links = ['spending', 'transactions', 'categories'];
  activeLink: string = this.links[0].path;

  expense = new FormGroup({
    expenseTypeId: new FormControl(),
    date: new FormControl(),
    amount: new FormControl(),
    budgetId: new FormControl(),
  });

  constructor() {
  }

}
