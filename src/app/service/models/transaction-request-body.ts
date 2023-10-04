/* tslint:disable */
/* eslint-disable */
export interface TransactionRequestBody {
  amount?: number;
  creationDate?: string;
  destinationIban?: string;
  id?: number;
  lastModifiedDate?: string;
  transactionDate?: string;
  type?: 'Transfert' | 'depot';
  user?: string;
}
