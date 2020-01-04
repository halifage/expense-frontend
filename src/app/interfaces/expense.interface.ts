export interface Expense {
  expenseId: number;
  amount: number;
  date: Date;
  expenseTypeName: string;
  budgetId?: number;
}
