/**
 * This class contains the list of all base endpoints used by the Angular application.
 * The backend endpoints endpoints are available at http://[esb_host]:8080.
 */
export class Routes {
  public static BUDGETS = '/api/budgets';
  public static EXPENSE_TYPES = '/api/expense-types';
  public static EXPENSES = '/api/expenses';
  public static EXPENSES_BY_BUDGET_ID = '/api/expenses/expenses-by-budget-id';
}
