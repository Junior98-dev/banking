/* tslint:disable */
/* eslint-disable */
import { EntityModelTransaction } from '../models/entity-model-transaction';
import { Links } from '../models/links';
export interface CollectionModelEntityModelTransaction {
  '_embedded'?: {
'transactions'?: Array<EntityModelTransaction>;
};
  '_links'?: Links;
}
