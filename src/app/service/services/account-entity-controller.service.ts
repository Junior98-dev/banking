/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceAccountDelete } from '../fn/account-entity-controller/delete-item-resource-account-delete';
import { DeleteItemResourceAccountDelete$Params } from '../fn/account-entity-controller/delete-item-resource-account-delete';
import { EntityModelAccount } from '../models/entity-model-account';
import { getCollectionResourceAccountGet1$Json } from '../fn/account-entity-controller/get-collection-resource-account-get-1-json';
import { GetCollectionResourceAccountGet1$Json$Params } from '../fn/account-entity-controller/get-collection-resource-account-get-1-json';
import { getCollectionResourceAccountGet1$UriList } from '../fn/account-entity-controller/get-collection-resource-account-get-1-uri-list';
import { GetCollectionResourceAccountGet1$UriList$Params } from '../fn/account-entity-controller/get-collection-resource-account-get-1-uri-list';
import { getItemResourceAccountGet } from '../fn/account-entity-controller/get-item-resource-account-get';
import { GetItemResourceAccountGet$Params } from '../fn/account-entity-controller/get-item-resource-account-get';
import { PagedModelEntityModelAccount } from '../models/paged-model-entity-model-account';
import { patchItemResourceAccountPatch } from '../fn/account-entity-controller/patch-item-resource-account-patch';
import { PatchItemResourceAccountPatch$Params } from '../fn/account-entity-controller/patch-item-resource-account-patch';
import { postCollectionResourceAccountPost } from '../fn/account-entity-controller/post-collection-resource-account-post';
import { PostCollectionResourceAccountPost$Params } from '../fn/account-entity-controller/post-collection-resource-account-post';
import { putItemResourceAccountPut } from '../fn/account-entity-controller/put-item-resource-account-put';
import { PutItemResourceAccountPut$Params } from '../fn/account-entity-controller/put-item-resource-account-put';

@Injectable({ providedIn: 'root' })
export class AccountEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceAccountGet1()` */
  static readonly GetCollectionResourceAccountGet1Path = '/accounts';

  /**
   * get-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceAccountGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAccountGet1$Json$Response(params?: GetCollectionResourceAccountGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelAccount>> {
    return getCollectionResourceAccountGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceAccountGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAccountGet1$Json(params?: GetCollectionResourceAccountGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelAccount> {
    return this.getCollectionResourceAccountGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelAccount>): PagedModelEntityModelAccount => r.body)
    );
  }

  /**
   * get-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceAccountGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAccountGet1$UriList$Response(params?: GetCollectionResourceAccountGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceAccountGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceAccountGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceAccountGet1$UriList(params?: GetCollectionResourceAccountGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceAccountGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceAccountPost()` */
  static readonly PostCollectionResourceAccountPostPath = '/accounts';

  /**
   * create-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceAccountPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceAccountPost$Response(params: PostCollectionResourceAccountPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return postCollectionResourceAccountPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceAccountPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceAccountPost(params: PostCollectionResourceAccountPost$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.postCollectionResourceAccountPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `getItemResourceAccountGet()` */
  static readonly GetItemResourceAccountGetPath = '/accounts/{id}';

  /**
   * get-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceAccountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceAccountGet$Response(params: GetItemResourceAccountGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return getItemResourceAccountGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceAccountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceAccountGet(params: GetItemResourceAccountGet$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.getItemResourceAccountGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `putItemResourceAccountPut()` */
  static readonly PutItemResourceAccountPutPath = '/accounts/{id}';

  /**
   * update-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceAccountPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceAccountPut$Response(params: PutItemResourceAccountPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return putItemResourceAccountPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceAccountPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceAccountPut(params: PutItemResourceAccountPut$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.putItemResourceAccountPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceAccountDelete()` */
  static readonly DeleteItemResourceAccountDeletePath = '/accounts/{id}';

  /**
   * delete-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceAccountDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceAccountDelete$Response(params: DeleteItemResourceAccountDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceAccountDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceAccountDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceAccountDelete(params: DeleteItemResourceAccountDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceAccountDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceAccountPatch()` */
  static readonly PatchItemResourceAccountPatchPath = '/accounts/{id}';

  /**
   * patch-account
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceAccountPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceAccountPatch$Response(params: PatchItemResourceAccountPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return patchItemResourceAccountPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-account
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceAccountPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceAccountPatch(params: PatchItemResourceAccountPatch$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.patchItemResourceAccountPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

}
