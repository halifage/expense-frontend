export interface Budget {
  id?: number;
  amount: number;
  dateFrom?: Date;
  dateTo?: Date;
  expenseId?: number;
  userId?: number;
  name?: string
}
