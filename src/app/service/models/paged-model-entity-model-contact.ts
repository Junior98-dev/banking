/* tslint:disable */
/* eslint-disable */
import { EntityModelContact } from '../models/entity-model-contact';
import { Links } from '../models/links';
import { PageMetadata } from '../models/page-metadata';
export interface PagedModelEntityModelContact {
  '_embedded'?: {
'contacts'?: Array<EntityModelContact>;
};
  '_links'?: Links;
  page?: PageMetadata;
}
