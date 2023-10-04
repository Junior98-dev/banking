/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceTransactionPatch$Json } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-patch-json';
import { CreatePropertyReferenceTransactionPatch$Json$Params } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-patch-json';
import { createPropertyReferenceTransactionPatch$UriList } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-patch-uri-list';
import { CreatePropertyReferenceTransactionPatch$UriList$Params } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-patch-uri-list';
import { createPropertyReferenceTransactionPut$Json } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-put-json';
import { CreatePropertyReferenceTransactionPut$Json$Params } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-put-json';
import { createPropertyReferenceTransactionPut$UriList } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-put-uri-list';
import { CreatePropertyReferenceTransactionPut$UriList$Params } from '../fn/transaction-property-reference-controller/create-property-reference-transaction-put-uri-list';
import { deletePropertyReferenceIdTransactionDelete } from '../fn/transaction-property-reference-controller/delete-property-reference-id-transaction-delete';
import { DeletePropertyReferenceIdTransactionDelete$Params } from '../fn/transaction-property-reference-controller/delete-property-reference-id-transaction-delete';
import { deletePropertyReferenceTransactionDelete } from '../fn/transaction-property-reference-controller/delete-property-reference-transaction-delete';
import { DeletePropertyReferenceTransactionDelete$Params } from '../fn/transaction-property-reference-controller/delete-property-reference-transaction-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceTransactionGet } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get';
import { FollowPropertyReferenceTransactionGet$Params } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get';
import { followPropertyReferenceTransactionGet1$Json } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get-1-json';
import { FollowPropertyReferenceTransactionGet1$Json$Params } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get-1-json';
import { followPropertyReferenceTransactionGet1$UriList } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get-1-uri-list';
import { FollowPropertyReferenceTransactionGet1$UriList$Params } from '../fn/transaction-property-reference-controller/follow-property-reference-transaction-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class TransactionPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceTransactionGet1()` */
  static readonly FollowPropertyReferenceTransactionGet1Path = '/transactions/{id}/user';

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTransactionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet1$Json$Response(params: FollowPropertyReferenceTransactionGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceTransactionGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTransactionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet1$Json(params: FollowPropertyReferenceTransactionGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceTransactionGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTransactionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet1$UriList$Response(params: FollowPropertyReferenceTransactionGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceTransactionGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTransactionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet1$UriList(params: FollowPropertyReferenceTransactionGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceTransactionGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceTransactionPut()` */
  static readonly CreatePropertyReferenceTransactionPutPath = '/transactions/{id}/user';

  /**
   * update-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTransactionPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTransactionPut$Json$Response(params: CreatePropertyReferenceTransactionPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTransactionPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTransactionPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTransactionPut$Json(params: CreatePropertyReferenceTransactionPut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTransactionPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTransactionPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTransactionPut$UriList$Response(params: CreatePropertyReferenceTransactionPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTransactionPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTransactionPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTransactionPut$UriList(params: CreatePropertyReferenceTransactionPut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTransactionPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceTransactionDelete()` */
  static readonly DeletePropertyReferenceTransactionDeletePath = '/transactions/{id}/user';

  /**
   * delete-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceTransactionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceTransactionDelete$Response(params: DeletePropertyReferenceTransactionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceTransactionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceTransactionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceTransactionDelete(params: DeletePropertyReferenceTransactionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceTransactionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceTransactionPatch()` */
  static readonly CreatePropertyReferenceTransactionPatchPath = '/transactions/{id}/user';

  /**
   * patch-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTransactionPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTransactionPatch$Json$Response(params: CreatePropertyReferenceTransactionPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTransactionPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTransactionPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceTransactionPatch$Json(params: CreatePropertyReferenceTransactionPatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTransactionPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceTransactionPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTransactionPatch$UriList$Response(params: CreatePropertyReferenceTransactionPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceTransactionPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceTransactionPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceTransactionPatch$UriList(params: CreatePropertyReferenceTransactionPatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceTransactionPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceTransactionGet()` */
  static readonly FollowPropertyReferenceTransactionGetPath = '/transactions/{id}/user/{propertyId}';

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceTransactionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet$Response(params: FollowPropertyReferenceTransactionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceTransactionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceTransactionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceTransactionGet(params: FollowPropertyReferenceTransactionGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceTransactionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdTransactionDelete()` */
  static readonly DeletePropertyReferenceIdTransactionDeletePath = '/transactions/{id}/user/{propertyId}';

  /**
   * delete-user-by-transaction-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdTransactionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdTransactionDelete$Response(params: DeletePropertyReferenceIdTransactionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdTransactionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-transaction-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdTransactionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdTransactionDelete(params: DeletePropertyReferenceIdTransactionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdTransactionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
