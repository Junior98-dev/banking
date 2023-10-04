/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelTransaction {
  '_links'?: Links;
  amount?: number;
  creationDate?: string;
  destinationIban?: string;
  lastModifiedDate?: string;
  transactionDate?: string;
  type?: 'Transfert' | 'depot';
}
