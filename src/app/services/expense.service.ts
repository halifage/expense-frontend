import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {ExpenseType} from '../interfaces/expense-type.interface';
import {Routes} from '../routes';
import {Expense} from '../interfaces/expense.interface';
import {catchError} from 'rxjs/operators';
import {ExpensesGroupedByType} from '../interfaces/expenses-grouped-by-type.interface';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  expenseTypes: ExpenseType[];
  expenses: Expense[];

  expenseTypesSource = new BehaviorSubject(this.expenseTypes);

  expenseTypesValue = this.expenseTypesSource.asObservable();

  expensesSource = new BehaviorSubject(this.expenses);

  expensesValue = this.expensesSource.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  updateExpenseTypesBehaviorSubject(expenseTypes: ExpenseType[]) {
    return this.expenseTypesSource.next(expenseTypes);
  }

  getUpdatedExpenseTypesBehaviorSubject() {
    return this.expenseTypesValue;
  }

  updateExpensesBehaviorSubject(expenses: Expense[]) {
    return this.expensesSource.next(expenses);
  }

  getUpdatedExpensesBehaviorSubject() {
    return this.expensesValue;
  }


  fetchExpenseTypes(): Observable<ExpenseType[]> {
    return this.httpClient.get<ExpenseType[]>(Routes.EXPENSE_TYPES);
  }

  addExpense(expense: Expense): Observable<number> {
    return this.httpClient.post<number>(Routes.EXPENSES, expense, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(
        catchError(
          (error: HttpErrorResponse) => {
            console.log(error);
            return throwError(error);
          }));
  }

  fetchExpensesByDateRange(): Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(`${Routes.EXPENSES}/expenses-by-date-range`);
  }

  fetchExpensesGroupedByExpenseType(): Observable<ExpensesGroupedByType[]> {
    return this.httpClient.get<ExpensesGroupedByType[]>(`${Routes.EXPENSES}/expenses-grouped-by-expense-type`);
  }

  updateExpenses(updatedExpenses: Expense[]): Observable<number> {
    return this.httpClient.put<number>(`${Routes.EXPENSES}/update-expenses`, updatedExpenses);
  }
}
