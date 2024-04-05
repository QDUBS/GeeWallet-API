export interface ITransaction {
  id: string;
  amount: number;
  description: string;
  category: 'INCOME' | 'EXPENSE';
  date: Date;
}