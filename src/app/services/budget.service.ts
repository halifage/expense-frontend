import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Budget} from '../interfaces/budget.interface';
import {Routes} from '../routes';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private httpClient: HttpClient) { }

  fetchBudgets(): Observable<Budget[]> {
    return this.httpClient.get<Budget[]>(Routes.BUDGETS)
  }
}
