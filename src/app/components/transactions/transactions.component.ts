import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../../services/expense.service';
import {Expense} from '../../interfaces/expense.interface';
import {MatExpansionPanel} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {BudgetService} from '../../services/budget.service';
import {ExpenseType} from '../../interfaces/expense-type.interface';
import {Budget} from '../../interfaces/budget.interface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  expenses: Expense[];
  displayedColumns = ['Category', 'Date', 'Amount'];

  expense = new FormGroup({
    expenseTypeId: new FormControl(),
    date: new FormControl(),
    amount: new FormControl(),
    budgetId: new FormControl(),
  });

  expenseTypes: ExpenseType[];
  budgets: Budget[];
  totalAmount: number;


  constructor(private expenseService: ExpenseService, private budgetService: BudgetService) { }

  ngOnInit() {

    this.expenseService.fetchExpensesByDateRange().subscribe(response => {
      this.expenses = response;
      this.totalAmount = this.expenses.map(expense => expense.amount).reduce((sum, value) => sum + value, 0);
    });
    this.expenseService.getUpdatedExpenseTypesBehaviorSubject().subscribe(response => {
      if (response)
        this.expenseTypes = response;
      else
        this.expenseService.fetchExpenseTypes().subscribe(types => this.expenseTypes = types)
    });
    this.budgetService.fetchBudgets().subscribe(budgets => this.budgets = budgets);
  }

  saveExpense(panel: MatExpansionPanel) {
    this.expenseService.addExpense(this.expense.value).subscribe(response => {
      this.expense.reset();
    });
    panel.close();
  }

  cancel(expensePanel: MatExpansionPanel) {
    this.expense.reset();
    expensePanel.close();
  }
}
