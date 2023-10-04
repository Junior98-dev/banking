/* tslint:disable */
/* eslint-disable */
import { EntityModelAccount } from '../models/entity-model-account';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelAccount {
  '_embedded'?: {
'accounts'?: Array<EntityModelAccount>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
