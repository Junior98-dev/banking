/* tslint:disable */
/* eslint-disable */
import { ContactResponse } from '../models/contact-response';
import { Links } from '../models/links';
export interface CollectionModelContact {
  '_embedded'?: {
'contacts'?: Array<ContactResponse>;
};
  '_links'?: Links;
}
