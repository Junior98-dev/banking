/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AccountEntityControllerService } from './services/account-entity-controller.service';
import { AccountSearchControllerService } from './services/account-search-controller.service';
import { AccountPropertyReferenceControllerService } from './services/account-property-reference-controller.service';
import { AddressEntityControllerService } from './services/address-entity-controller.service';
import { AddressPropertyReferenceControllerService } from './services/address-property-reference-controller.service';
import { ContactEntityControllerService } from './services/contact-entity-controller.service';
import { ContactSearchControllerService } from './services/contact-search-controller.service';
import { ContactPropertyReferenceControllerService } from './services/contact-property-reference-controller.service';
import { ProfileControllerService } from './services/profile-controller.service';
import { RoleEntityControllerService } from './services/role-entity-controller.service';
import { RoleSearchControllerService } from './services/role-search-controller.service';
import { RolePropertyReferenceControllerService } from './services/role-property-reference-controller.service';
import { TransactionEntityControllerService } from './services/transaction-entity-controller.service';
import { TransactionSearchControllerService } from './services/transaction-search-controller.service';
import { TransactionPropertyReferenceControllerService } from './services/transaction-property-reference-controller.service';
import { UserEntityControllerService } from './services/user-entity-controller.service';
import { UserSearchControllerService } from './services/user-search-controller.service';
import { UserPropertyReferenceControllerService } from './services/user-property-reference-controller.service';
import { UserControllerService } from './services/user-controller.service';
import { TransactionControllerService } from './services/transaction-controller.service';
import { ContactControllerService } from './services/contact-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { AddressControllerService } from './services/address-controller.service';
import { AccountControllerService } from './services/account-controller.service';
import { StatisticsControllerService } from './services/statistics-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AccountEntityControllerService,
    AccountSearchControllerService,
    AccountPropertyReferenceControllerService,
    AddressEntityControllerService,
    AddressPropertyReferenceControllerService,
    ContactEntityControllerService,
    ContactSearchControllerService,
    ContactPropertyReferenceControllerService,
    ProfileControllerService,
    RoleEntityControllerService,
    RoleSearchControllerService,
    RolePropertyReferenceControllerService,
    TransactionEntityControllerService,
    TransactionSearchControllerService,
    TransactionPropertyReferenceControllerService,
    UserEntityControllerService,
    UserSearchControllerService,
    UserPropertyReferenceControllerService,
    UserControllerService,
    TransactionControllerService,
    ContactControllerService,
    AuthenticationControllerService,
    AddressControllerService,
    AccountControllerService,
    StatisticsControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
