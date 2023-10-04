/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
import { TransactionResponse } from '../models/transaction-response';
export interface CollectionModelTransaction {
  '_embedded'?: {
'transactions'?: Array<TransactionResponse>;
};
  '_links'?: Links;
}
