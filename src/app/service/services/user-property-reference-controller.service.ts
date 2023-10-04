/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelContact } from '../models/collection-model-contact';
import { CollectionModelTransaction } from '../models/collection-model-transaction';
import { createPropertyReferenceUserPatch$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { CreatePropertyReferenceUserPatch$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-json';
import { createPropertyReferenceUserPatch$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { CreatePropertyReferenceUserPatch$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-uri-list';
import { createPropertyReferenceUserPatch1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { CreatePropertyReferenceUserPatch1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-json';
import { createPropertyReferenceUserPatch1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { CreatePropertyReferenceUserPatch1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-1-uri-list';
import { createPropertyReferenceUserPatch2$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-json';
import { CreatePropertyReferenceUserPatch2$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-json';
import { createPropertyReferenceUserPatch2$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-uri-list';
import { CreatePropertyReferenceUserPatch2$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-2-uri-list';
import { createPropertyReferenceUserPatch3$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-3-json';
import { CreatePropertyReferenceUserPatch3$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-3-json';
import { createPropertyReferenceUserPatch3$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-3-uri-list';
import { CreatePropertyReferenceUserPatch3$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-3-uri-list';
import { createPropertyReferenceUserPatch4$Json } from '../fn/user-property-reference-controller/create-property-reference-user-patch-4-json';
import { CreatePropertyReferenceUserPatch4$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-4-json';
import { createPropertyReferenceUserPatch4$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-patch-4-uri-list';
import { CreatePropertyReferenceUserPatch4$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-patch-4-uri-list';
import { createPropertyReferenceUserPut$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { CreatePropertyReferenceUserPut$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-json';
import { createPropertyReferenceUserPut$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { CreatePropertyReferenceUserPut$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-uri-list';
import { createPropertyReferenceUserPut1$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { CreatePropertyReferenceUserPut1$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-json';
import { createPropertyReferenceUserPut1$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { CreatePropertyReferenceUserPut1$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-1-uri-list';
import { createPropertyReferenceUserPut2$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-json';
import { CreatePropertyReferenceUserPut2$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-json';
import { createPropertyReferenceUserPut2$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-uri-list';
import { CreatePropertyReferenceUserPut2$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-2-uri-list';
import { createPropertyReferenceUserPut3$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-3-json';
import { CreatePropertyReferenceUserPut3$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-3-json';
import { createPropertyReferenceUserPut3$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-3-uri-list';
import { CreatePropertyReferenceUserPut3$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-3-uri-list';
import { createPropertyReferenceUserPut4$Json } from '../fn/user-property-reference-controller/create-property-reference-user-put-4-json';
import { CreatePropertyReferenceUserPut4$Json$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-4-json';
import { createPropertyReferenceUserPut4$UriList } from '../fn/user-property-reference-controller/create-property-reference-user-put-4-uri-list';
import { CreatePropertyReferenceUserPut4$UriList$Params } from '../fn/user-property-reference-controller/create-property-reference-user-put-4-uri-list';
import { deletePropertyReferenceIdUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { DeletePropertyReferenceIdUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete';
import { deletePropertyReferenceIdUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { DeletePropertyReferenceIdUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-1';
import { deletePropertyReferenceIdUserDelete2 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-2';
import { DeletePropertyReferenceIdUserDelete2$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-2';
import { deletePropertyReferenceIdUserDelete3 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-3';
import { DeletePropertyReferenceIdUserDelete3$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-3';
import { deletePropertyReferenceIdUserDelete4 } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-4';
import { DeletePropertyReferenceIdUserDelete4$Params } from '../fn/user-property-reference-controller/delete-property-reference-id-user-delete-4';
import { deletePropertyReferenceUserDelete } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { DeletePropertyReferenceUserDelete$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete';
import { deletePropertyReferenceUserDelete1 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { DeletePropertyReferenceUserDelete1$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-1';
import { deletePropertyReferenceUserDelete2 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-2';
import { DeletePropertyReferenceUserDelete2$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-2';
import { deletePropertyReferenceUserDelete3 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-3';
import { DeletePropertyReferenceUserDelete3$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-3';
import { deletePropertyReferenceUserDelete4 } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-4';
import { DeletePropertyReferenceUserDelete4$Params } from '../fn/user-property-reference-controller/delete-property-reference-user-delete-4';
import { EntityModelAccount } from '../models/entity-model-account';
import { EntityModelAddress } from '../models/entity-model-address';
import { EntityModelRole } from '../models/entity-model-role';
import { followPropertyReferenceUserGet } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { FollowPropertyReferenceUserGet$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get';
import { followPropertyReferenceUserGet1$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { FollowPropertyReferenceUserGet1$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-json';
import { followPropertyReferenceUserGet1$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { FollowPropertyReferenceUserGet1$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-1-uri-list';
import { followPropertyReferenceUserGet2 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { FollowPropertyReferenceUserGet2$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-2';
import { followPropertyReferenceUserGet21$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { FollowPropertyReferenceUserGet21$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-json';
import { followPropertyReferenceUserGet21$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';
import { FollowPropertyReferenceUserGet21$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-21-uri-list';
import { followPropertyReferenceUserGet3 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-3';
import { FollowPropertyReferenceUserGet3$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-3';
import { followPropertyReferenceUserGet31$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-json';
import { FollowPropertyReferenceUserGet31$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-json';
import { followPropertyReferenceUserGet31$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-uri-list';
import { FollowPropertyReferenceUserGet31$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-31-uri-list';
import { followPropertyReferenceUserGet4 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-4';
import { FollowPropertyReferenceUserGet4$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-4';
import { followPropertyReferenceUserGet41$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-41-json';
import { FollowPropertyReferenceUserGet41$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-41-json';
import { followPropertyReferenceUserGet41$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-41-uri-list';
import { FollowPropertyReferenceUserGet41$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-41-uri-list';
import { followPropertyReferenceUserGet5 } from '../fn/user-property-reference-controller/follow-property-reference-user-get-5';
import { FollowPropertyReferenceUserGet5$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-5';
import { followPropertyReferenceUserGet51$Json } from '../fn/user-property-reference-controller/follow-property-reference-user-get-51-json';
import { FollowPropertyReferenceUserGet51$Json$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-51-json';
import { followPropertyReferenceUserGet51$UriList } from '../fn/user-property-reference-controller/follow-property-reference-user-get-51-uri-list';
import { FollowPropertyReferenceUserGet51$UriList$Params } from '../fn/user-property-reference-controller/follow-property-reference-user-get-51-uri-list';

@Injectable({ providedIn: 'root' })
export class UserPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceUserGet1()` */
  static readonly FollowPropertyReferenceUserGet1Path = '/users/{id}/account';

  /**
   * get-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json$Response(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return followPropertyReferenceUserGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$Json(params: FollowPropertyReferenceUserGet1$Json$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.followPropertyReferenceUserGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /**
   * get-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList$Response(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet1$UriList(params: FollowPropertyReferenceUserGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut()` */
  static readonly CreatePropertyReferenceUserPutPath = '/users/{id}/account';

  /**
   * update-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json$Response(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return createPropertyReferenceUserPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut$Json(params: CreatePropertyReferenceUserPut$Json$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.createPropertyReferenceUserPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /**
   * update-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList$Response(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return createPropertyReferenceUserPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut$UriList(params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.createPropertyReferenceUserPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete()` */
  static readonly DeletePropertyReferenceUserDeletePath = '/users/{id}/account';

  /**
   * delete-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete$Response(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete(params: DeletePropertyReferenceUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch()` */
  static readonly CreatePropertyReferenceUserPatchPath = '/users/{id}/account';

  /**
   * patch-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json$Response(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return createPropertyReferenceUserPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch$Json(params: CreatePropertyReferenceUserPatch$Json$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.createPropertyReferenceUserPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /**
   * patch-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList$Response(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return createPropertyReferenceUserPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch$UriList(params: CreatePropertyReferenceUserPatch$UriList$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.createPropertyReferenceUserPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet()` */
  static readonly FollowPropertyReferenceUserGetPath = '/users/{id}/account/{propertyId}';

  /**
   * get-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet$Response(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return followPropertyReferenceUserGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet(params: FollowPropertyReferenceUserGet$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.followPropertyReferenceUserGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete()` */
  static readonly DeletePropertyReferenceIdUserDeletePath = '/users/{id}/account/{propertyId}';

  /**
   * delete-account-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete$Response(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-account-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete(params: DeletePropertyReferenceIdUserDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet21()` */
  static readonly FollowPropertyReferenceUserGet21Path = '/users/{id}/address';

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json$Response(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return followPropertyReferenceUserGet21$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$Json(params: FollowPropertyReferenceUserGet21$Json$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.followPropertyReferenceUserGet21$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet21$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList$Response(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet21$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet21$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet21$UriList(params: FollowPropertyReferenceUserGet21$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet21$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut1()` */
  static readonly CreatePropertyReferenceUserPut1Path = '/users/{id}/address';

  /**
   * update-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json$Response(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return createPropertyReferenceUserPut1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut1$Json(params: CreatePropertyReferenceUserPut1$Json$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.createPropertyReferenceUserPut1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList$Response(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return createPropertyReferenceUserPut1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut1$UriList(params: CreatePropertyReferenceUserPut1$UriList$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.createPropertyReferenceUserPut1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete1()` */
  static readonly DeletePropertyReferenceUserDelete1Path = '/users/{id}/address';

  /**
   * delete-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1$Response(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete1(params: DeletePropertyReferenceUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch1()` */
  static readonly CreatePropertyReferenceUserPatch1Path = '/users/{id}/address';

  /**
   * patch-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json$Response(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return createPropertyReferenceUserPatch1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch1$Json(params: CreatePropertyReferenceUserPatch1$Json$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.createPropertyReferenceUserPatch1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch1$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList$Response(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return createPropertyReferenceUserPatch1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch1$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch1$UriList(params: CreatePropertyReferenceUserPatch1$UriList$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.createPropertyReferenceUserPatch1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet2()` */
  static readonly FollowPropertyReferenceUserGet2Path = '/users/{id}/address/{propertyId}';

  /**
   * get-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2$Response(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAddress>> {
    return followPropertyReferenceUserGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * get-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet2(params: FollowPropertyReferenceUserGet2$Params, context?: HttpContext): Observable<EntityModelAddress> {
    return this.followPropertyReferenceUserGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAddress>): EntityModelAddress => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete1()` */
  static readonly DeletePropertyReferenceIdUserDelete1Path = '/users/{id}/address/{propertyId}';

  /**
   * delete-address-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete1()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1$Response(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete1(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-address-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete1(params: DeletePropertyReferenceIdUserDelete1$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete1$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet31()` */
  static readonly FollowPropertyReferenceUserGet31Path = '/users/{id}/contacts';

  /**
   * get-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet31$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$Json$Response(params: FollowPropertyReferenceUserGet31$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return followPropertyReferenceUserGet31$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet31$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$Json(params: FollowPropertyReferenceUserGet31$Json$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.followPropertyReferenceUserGet31$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /**
   * get-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet31$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$UriList$Response(params: FollowPropertyReferenceUserGet31$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet31$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet31$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet31$UriList(params: FollowPropertyReferenceUserGet31$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet31$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut2()` */
  static readonly CreatePropertyReferenceUserPut2Path = '/users/{id}/contacts';

  /**
   * update-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut2$Json$Response(params: CreatePropertyReferenceUserPut2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return createPropertyReferenceUserPut2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut2$Json(params: CreatePropertyReferenceUserPut2$Json$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.createPropertyReferenceUserPut2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /**
   * update-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut2$UriList$Response(params: CreatePropertyReferenceUserPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return createPropertyReferenceUserPut2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut2$UriList(params: CreatePropertyReferenceUserPut2$UriList$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.createPropertyReferenceUserPut2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete2()` */
  static readonly DeletePropertyReferenceUserDelete2Path = '/users/{id}/contacts';

  /**
   * delete-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete2$Response(params: DeletePropertyReferenceUserDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete2(params: DeletePropertyReferenceUserDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch2()` */
  static readonly CreatePropertyReferenceUserPatch2Path = '/users/{id}/contacts';

  /**
   * patch-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch2$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch2$Json$Response(params: CreatePropertyReferenceUserPatch2$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return createPropertyReferenceUserPatch2$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch2$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch2$Json(params: CreatePropertyReferenceUserPatch2$Json$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.createPropertyReferenceUserPatch2$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /**
   * patch-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch2$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch2$UriList$Response(params: CreatePropertyReferenceUserPatch2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return createPropertyReferenceUserPatch2$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch2$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch2$UriList(params: CreatePropertyReferenceUserPatch2$UriList$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.createPropertyReferenceUserPatch2$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet3()` */
  static readonly FollowPropertyReferenceUserGet3Path = '/users/{id}/contacts/{propertyId}';

  /**
   * get-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet3$Response(params: FollowPropertyReferenceUserGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
    return followPropertyReferenceUserGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet3(params: FollowPropertyReferenceUserGet3$Params, context?: HttpContext): Observable<CollectionModelContact> {
    return this.followPropertyReferenceUserGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelContact>): CollectionModelContact => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete2()` */
  static readonly DeletePropertyReferenceIdUserDelete2Path = '/users/{id}/contacts/{propertyId}';

  /**
   * delete-contact-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete2()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete2$Response(params: DeletePropertyReferenceIdUserDelete2$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete2(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-contact-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete2(params: DeletePropertyReferenceIdUserDelete2$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete2$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet41()` */
  static readonly FollowPropertyReferenceUserGet41Path = '/users/{id}/role';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet41$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet41$Json$Response(params: FollowPropertyReferenceUserGet41$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return followPropertyReferenceUserGet41$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet41$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet41$Json(params: FollowPropertyReferenceUserGet41$Json$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.followPropertyReferenceUserGet41$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet41$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet41$UriList$Response(params: FollowPropertyReferenceUserGet41$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet41$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet41$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet41$UriList(params: FollowPropertyReferenceUserGet41$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet41$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut3()` */
  static readonly CreatePropertyReferenceUserPut3Path = '/users/{id}/role';

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut3$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut3$Json$Response(params: CreatePropertyReferenceUserPut3$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return createPropertyReferenceUserPut3$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut3$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut3$Json(params: CreatePropertyReferenceUserPut3$Json$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.createPropertyReferenceUserPut3$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut3$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut3$UriList$Response(params: CreatePropertyReferenceUserPut3$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return createPropertyReferenceUserPut3$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut3$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut3$UriList(params: CreatePropertyReferenceUserPut3$UriList$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.createPropertyReferenceUserPut3$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete3()` */
  static readonly DeletePropertyReferenceUserDelete3Path = '/users/{id}/role';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete3$Response(params: DeletePropertyReferenceUserDelete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete3(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete3(params: DeletePropertyReferenceUserDelete3$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch3()` */
  static readonly CreatePropertyReferenceUserPatch3Path = '/users/{id}/role';

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch3$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch3$Json$Response(params: CreatePropertyReferenceUserPatch3$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return createPropertyReferenceUserPatch3$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch3$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch3$Json(params: CreatePropertyReferenceUserPatch3$Json$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.createPropertyReferenceUserPatch3$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch3$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch3$UriList$Response(params: CreatePropertyReferenceUserPatch3$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return createPropertyReferenceUserPatch3$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch3$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch3$UriList(params: CreatePropertyReferenceUserPatch3$UriList$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.createPropertyReferenceUserPatch3$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet4()` */
  static readonly FollowPropertyReferenceUserGet4Path = '/users/{id}/role/{propertyId}';

  /**
   * get-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet4()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet4$Response(params: FollowPropertyReferenceUserGet4$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelRole>> {
    return followPropertyReferenceUserGet4(this.http, this.rootUrl, params, context);
  }

  /**
   * get-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet4(params: FollowPropertyReferenceUserGet4$Params, context?: HttpContext): Observable<EntityModelRole> {
    return this.followPropertyReferenceUserGet4$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelRole>): EntityModelRole => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete3()` */
  static readonly DeletePropertyReferenceIdUserDelete3Path = '/users/{id}/role/{propertyId}';

  /**
   * delete-role-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete3()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete3$Response(params: DeletePropertyReferenceIdUserDelete3$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete3(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-role-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete3(params: DeletePropertyReferenceIdUserDelete3$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete3$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet51()` */
  static readonly FollowPropertyReferenceUserGet51Path = '/users/{id}/transactions';

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet51$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet51$Json$Response(params: FollowPropertyReferenceUserGet51$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return followPropertyReferenceUserGet51$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet51$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet51$Json(params: FollowPropertyReferenceUserGet51$Json$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.followPropertyReferenceUserGet51$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet51$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet51$UriList$Response(params: FollowPropertyReferenceUserGet51$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceUserGet51$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet51$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet51$UriList(params: FollowPropertyReferenceUserGet51$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceUserGet51$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPut4()` */
  static readonly CreatePropertyReferenceUserPut4Path = '/users/{id}/transactions';

  /**
   * update-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut4$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut4$Json$Response(params: CreatePropertyReferenceUserPut4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return createPropertyReferenceUserPut4$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut4$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPut4$Json(params: CreatePropertyReferenceUserPut4$Json$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.createPropertyReferenceUserPut4$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /**
   * update-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPut4$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut4$UriList$Response(params: CreatePropertyReferenceUserPut4$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return createPropertyReferenceUserPut4$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPut4$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPut4$UriList(params: CreatePropertyReferenceUserPut4$UriList$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.createPropertyReferenceUserPut4$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceUserDelete4()` */
  static readonly DeletePropertyReferenceUserDelete4Path = '/users/{id}/transactions';

  /**
   * delete-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceUserDelete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete4$Response(params: DeletePropertyReferenceUserDelete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceUserDelete4(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceUserDelete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceUserDelete4(params: DeletePropertyReferenceUserDelete4$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceUserDelete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceUserPatch4()` */
  static readonly CreatePropertyReferenceUserPatch4Path = '/users/{id}/transactions';

  /**
   * patch-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch4$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch4$Json$Response(params: CreatePropertyReferenceUserPatch4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return createPropertyReferenceUserPatch4$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch4$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceUserPatch4$Json(params: CreatePropertyReferenceUserPatch4$Json$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.createPropertyReferenceUserPatch4$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /**
   * patch-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceUserPatch4$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch4$UriList$Response(params: CreatePropertyReferenceUserPatch4$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return createPropertyReferenceUserPatch4$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceUserPatch4$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceUserPatch4$UriList(params: CreatePropertyReferenceUserPatch4$UriList$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.createPropertyReferenceUserPatch4$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceUserGet5()` */
  static readonly FollowPropertyReferenceUserGet5Path = '/users/{id}/transactions/{propertyId}';

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceUserGet5()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet5$Response(params: FollowPropertyReferenceUserGet5$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
    return followPropertyReferenceUserGet5(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceUserGet5$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceUserGet5(params: FollowPropertyReferenceUserGet5$Params, context?: HttpContext): Observable<CollectionModelTransaction> {
    return this.followPropertyReferenceUserGet5$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelTransaction>): CollectionModelTransaction => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdUserDelete4()` */
  static readonly DeletePropertyReferenceIdUserDelete4Path = '/users/{id}/transactions/{propertyId}';

  /**
   * delete-transaction-by-user-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdUserDelete4()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete4$Response(params: DeletePropertyReferenceIdUserDelete4$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdUserDelete4(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-transaction-by-user-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdUserDelete4$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdUserDelete4(params: DeletePropertyReferenceIdUserDelete4$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdUserDelete4$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
