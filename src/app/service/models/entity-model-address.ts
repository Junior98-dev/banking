/* tslint:disable */
/* eslint-disable */
import { Links } from '../models/links';
export interface EntityModelAddress {
  '_links'?: Links;
  city?: string;
  country?: string;
  creationDate?: string;
  houseNumber?: number;
  lastModifiedDate?: string;
  street?: string;
  zipCode?: number;
}
