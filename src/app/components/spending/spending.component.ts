import {Component, OnInit} from '@angular/core';
import {ExpenseService} from '../../services/expense.service';
import {ExpensesGroupedByType} from '../../interfaces/expenses-grouped-by-type.interface';
import {MatExpansionPanel} from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';
import {ExpenseType} from '../../interfaces/expense-type.interface';
import {BudgetService} from '../../services/budget.service';
import {Budget} from '../../interfaces/budget.interface';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.css']
})
export class SpendingComponent implements OnInit {

  groupedExpenses: ExpensesGroupedByType[];
  displayedColumns = ['Category', 'Amount'];

  expense = new FormGroup({
    expenseTypeId: new FormControl(),
    date: new FormControl(),
    amount: new FormControl(),
    budgetId: new FormControl(),
  });

  expenseTypes: ExpenseType[];
  budgets: Budget[];
  totalAmount: number;

  constructor(private expenseService: ExpenseService, private budgetService: BudgetService) {}

  ngOnInit() {
    this.expenseService.fetchExpensesGroupedByExpenseType().subscribe(response => {
      this.groupedExpenses = response;
      this.totalAmount = this.groupedExpenses.map(expense => expense.totalValue).reduce((sum, value) => sum + value, 0);
    });
    this.expenseService.getUpdatedExpenseTypesBehaviorSubject().subscribe(response => this.expenseTypes = response);
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
