/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceAddressPatch$Json } from '../fn/address-property-reference-controller/create-property-reference-address-patch-json';
import { CreatePropertyReferenceAddressPatch$Json$Params } from '../fn/address-property-reference-controller/create-property-reference-address-patch-json';
import { createPropertyReferenceAddressPatch$UriList } from '../fn/address-property-reference-controller/create-property-reference-address-patch-uri-list';
import { CreatePropertyReferenceAddressPatch$UriList$Params } from '../fn/address-property-reference-controller/create-property-reference-address-patch-uri-list';
import { createPropertyReferenceAddressPut$Json } from '../fn/address-property-reference-controller/create-property-reference-address-put-json';
import { CreatePropertyReferenceAddressPut$Json$Params } from '../fn/address-property-reference-controller/create-property-reference-address-put-json';
import { createPropertyReferenceAddressPut$UriList } from '../fn/address-property-reference-controller/create-property-reference-address-put-uri-list';
import { CreatePropertyReferenceAddressPut$UriList$Params } from '../fn/address-property-reference-controller/create-property-reference-address-put-uri-list';
import { deletePropertyReferenceAddressDelete } from '../fn/address-property-reference-controller/delete-property-reference-address-delete';
import { DeletePropertyReferenceAddressDelete$Params } from '../fn/address-property-reference-controller/delete-property-reference-address-delete';
import { deletePropertyReferenceIdAddressDelete } from '../fn/address-property-reference-controller/delete-property-reference-id-address-delete';
import { DeletePropertyReferenceIdAddressDelete$Params } from '../fn/address-property-reference-controller/delete-property-reference-id-address-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceAddressGet } from '../fn/address-property-reference-controller/follow-property-reference-address-get';
import { FollowPropertyReferenceAddressGet$Params } from '../fn/address-property-reference-controller/follow-property-reference-address-get';
import { followPropertyReferenceAddressGet1$Json } from '../fn/address-property-reference-controller/follow-property-reference-address-get-1-json';
import { FollowPropertyReferenceAddressGet1$Json$Params } from '../fn/address-property-reference-controller/follow-property-reference-address-get-1-json';
import { followPropertyReferenceAddressGet1$UriList } from '../fn/address-property-reference-controller/follow-property-reference-address-get-1-uri-list';
import { FollowPropertyReferenceAddressGet1$UriList$Params } from '../fn/address-property-reference-controller/follow-property-reference-address-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class AddressPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceAddressGet1()` */
  static readonly FollowPropertyReferenceAddressGet1Path = '/addresses/{id}/user';

  /**
   * get-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAddressGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet1$Json$Response(params: FollowPropertyReferenceAddressGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceAddressGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAddressGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet1$Json(params: FollowPropertyReferenceAddressGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceAddressGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAddressGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet1$UriList$Response(params: FollowPropertyReferenceAddressGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceAddressGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAddressGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet1$UriList(params: FollowPropertyReferenceAddressGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceAddressGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceAddressPut()` */
  static readonly CreatePropertyReferenceAddressPutPath = '/addresses/{id}/user';

  /**
   * update-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAddressPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAddressPut$Json$Response(params: CreatePropertyReferenceAddressPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAddressPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAddressPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAddressPut$Json(params: CreatePropertyReferenceAddressPut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAddressPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAddressPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAddressPut$UriList$Response(params: CreatePropertyReferenceAddressPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAddressPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAddressPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAddressPut$UriList(params: CreatePropertyReferenceAddressPut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAddressPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceAddressDelete()` */
  static readonly DeletePropertyReferenceAddressDeletePath = '/addresses/{id}/user';

  /**
   * delete-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceAddressDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceAddressDelete$Response(params: DeletePropertyReferenceAddressDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceAddressDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceAddressDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceAddressDelete(params: DeletePropertyReferenceAddressDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceAddressDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceAddressPatch()` */
  static readonly CreatePropertyReferenceAddressPatchPath = '/addresses/{id}/user';

  /**
   * patch-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAddressPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAddressPatch$Json$Response(params: CreatePropertyReferenceAddressPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAddressPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAddressPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAddressPatch$Json(params: CreatePropertyReferenceAddressPatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAddressPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAddressPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAddressPatch$UriList$Response(params: CreatePropertyReferenceAddressPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAddressPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAddressPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAddressPatch$UriList(params: CreatePropertyReferenceAddressPatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAddressPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceAddressGet()` */
  static readonly FollowPropertyReferenceAddressGetPath = '/addresses/{id}/user/{propertyId}';

  /**
   * get-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAddressGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet$Response(params: FollowPropertyReferenceAddressGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceAddressGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAddressGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAddressGet(params: FollowPropertyReferenceAddressGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceAddressGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdAddressDelete()` */
  static readonly DeletePropertyReferenceIdAddressDeletePath = '/addresses/{id}/user/{propertyId}';

  /**
   * delete-user-by-address-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdAddressDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdAddressDelete$Response(params: DeletePropertyReferenceIdAddressDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdAddressDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-address-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdAddressDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdAddressDelete(params: DeletePropertyReferenceIdAddressDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdAddressDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
