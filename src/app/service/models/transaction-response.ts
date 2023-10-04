/* tslint:disable */
/* eslint-disable */
export interface TransactionResponse {
  amount?: number;
  creationDate?: string;
  destinationIban?: string;
  lastModifiedDate?: string;
  transactionDate?: string;
  type?: 'Transfert' | 'depot';
}
