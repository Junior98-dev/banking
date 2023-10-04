/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Links } from '../models/links';
export interface EntityModelUser {
  '_links'?: Links;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  active?: boolean;
  authorities?: Array<GrantedAuthority>;
  creationDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  lastModifiedDate?: string;
  lastname?: string;
  password?: string;
  username?: string;
}
