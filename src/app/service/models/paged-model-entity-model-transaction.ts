/* tslint:disable */
/* eslint-disable */
import { EntityModelTransaction } from '../models/entity-model-transaction';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelTransaction {
  '_embedded'?: {
'transactions'?: Array<EntityModelTransaction>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
