/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceAccountPatch$Json } from '../fn/account-property-reference-controller/create-property-reference-account-patch-json';
import { CreatePropertyReferenceAccountPatch$Json$Params } from '../fn/account-property-reference-controller/create-property-reference-account-patch-json';
import { createPropertyReferenceAccountPatch$UriList } from '../fn/account-property-reference-controller/create-property-reference-account-patch-uri-list';
import { CreatePropertyReferenceAccountPatch$UriList$Params } from '../fn/account-property-reference-controller/create-property-reference-account-patch-uri-list';
import { createPropertyReferenceAccountPut$Json } from '../fn/account-property-reference-controller/create-property-reference-account-put-json';
import { CreatePropertyReferenceAccountPut$Json$Params } from '../fn/account-property-reference-controller/create-property-reference-account-put-json';
import { createPropertyReferenceAccountPut$UriList } from '../fn/account-property-reference-controller/create-property-reference-account-put-uri-list';
import { CreatePropertyReferenceAccountPut$UriList$Params } from '../fn/account-property-reference-controller/create-property-reference-account-put-uri-list';
import { deletePropertyReferenceAccountDelete } from '../fn/account-property-reference-controller/delete-property-reference-account-delete';
import { DeletePropertyReferenceAccountDelete$Params } from '../fn/account-property-reference-controller/delete-property-reference-account-delete';
import { deletePropertyReferenceIdAccountDelete } from '../fn/account-property-reference-controller/delete-property-reference-id-account-delete';
import { DeletePropertyReferenceIdAccountDelete$Params } from '../fn/account-property-reference-controller/delete-property-reference-id-account-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceAccountGet } from '../fn/account-property-reference-controller/follow-property-reference-account-get';
import { FollowPropertyReferenceAccountGet$Params } from '../fn/account-property-reference-controller/follow-property-reference-account-get';
import { followPropertyReferenceAccountGet1$Json } from '../fn/account-property-reference-controller/follow-property-reference-account-get-1-json';
import { FollowPropertyReferenceAccountGet1$Json$Params } from '../fn/account-property-reference-controller/follow-property-reference-account-get-1-json';
import { followPropertyReferenceAccountGet1$UriList } from '../fn/account-property-reference-controller/follow-property-reference-account-get-1-uri-list';
import { FollowPropertyReferenceAccountGet1$UriList$Params } from '../fn/account-property-reference-controller/follow-property-reference-account-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class AccountPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceAccountGet1()` */
  static readonly FollowPropertyReferenceAccountGet1Path = '/accounts/{id}/user';

  /**
   * get-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAccountGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet1$Json$Response(params: FollowPropertyReferenceAccountGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceAccountGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAccountGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet1$Json(params: FollowPropertyReferenceAccountGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceAccountGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAccountGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet1$UriList$Response(params: FollowPropertyReferenceAccountGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceAccountGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAccountGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet1$UriList(params: FollowPropertyReferenceAccountGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceAccountGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceAccountPut()` */
  static readonly CreatePropertyReferenceAccountPutPath = '/accounts/{id}/user';

  /**
   * update-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAccountPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAccountPut$Json$Response(params: CreatePropertyReferenceAccountPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAccountPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAccountPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAccountPut$Json(params: CreatePropertyReferenceAccountPut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAccountPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAccountPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAccountPut$UriList$Response(params: CreatePropertyReferenceAccountPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAccountPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAccountPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAccountPut$UriList(params: CreatePropertyReferenceAccountPut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAccountPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceAccountDelete()` */
  static readonly DeletePropertyReferenceAccountDeletePath = '/accounts/{id}/user';

  /**
   * delete-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceAccountDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceAccountDelete$Response(params: DeletePropertyReferenceAccountDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceAccountDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceAccountDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceAccountDelete(params: DeletePropertyReferenceAccountDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceAccountDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceAccountPatch()` */
  static readonly CreatePropertyReferenceAccountPatchPath = '/accounts/{id}/user';

  /**
   * patch-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAccountPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAccountPatch$Json$Response(params: CreatePropertyReferenceAccountPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAccountPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAccountPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceAccountPatch$Json(params: CreatePropertyReferenceAccountPatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAccountPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceAccountPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAccountPatch$UriList$Response(params: CreatePropertyReferenceAccountPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceAccountPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceAccountPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceAccountPatch$UriList(params: CreatePropertyReferenceAccountPatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceAccountPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceAccountGet()` */
  static readonly FollowPropertyReferenceAccountGetPath = '/accounts/{id}/user/{propertyId}';

  /**
   * get-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceAccountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet$Response(params: FollowPropertyReferenceAccountGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceAccountGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceAccountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceAccountGet(params: FollowPropertyReferenceAccountGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceAccountGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdAccountDelete()` */
  static readonly DeletePropertyReferenceIdAccountDeletePath = '/accounts/{id}/user/{propertyId}';

  /**
   * delete-user-by-account-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdAccountDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdAccountDelete$Response(params: DeletePropertyReferenceIdAccountDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdAccountDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-account-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdAccountDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdAccountDelete(params: DeletePropertyReferenceIdAccountDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdAccountDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
