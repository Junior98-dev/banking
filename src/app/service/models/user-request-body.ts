/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface UserRequestBody {
  account?: string;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  active?: boolean;
  address?: string;
  authorities?: Array<GrantedAuthority>;
  contacts?: Array<string>;
  creationDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstname?: string;
  id?: number;
  lastModifiedDate?: string;
  lastname?: string;
  password?: string;
  role?: string;
  transactions?: Array<string>;
  username?: string;
}
