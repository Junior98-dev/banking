/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceTransactionDelete } from '../fn/transaction-entity-controller/delete-item-resource-transaction-delete';
import { DeleteItemResourceTransactionDelete$Params } from '../fn/transaction-entity-controller/delete-item-resource-transaction-delete';
import { EntityModelTransaction } from '../models/entity-model-transaction';
import { getCollectionResourceTransactionGet1$Json } from '../fn/transaction-entity-controller/get-collection-resource-transaction-get-1-json';
import { GetCollectionResourceTransactionGet1$Json$Params } from '../fn/transaction-entity-controller/get-collection-resource-transaction-get-1-json';
import { getCollectionResourceTransactionGet1$UriList } from '../fn/transaction-entity-controller/get-collection-resource-transaction-get-1-uri-list';
import { GetCollectionResourceTransactionGet1$UriList$Params } from '../fn/transaction-entity-controller/get-collection-resource-transaction-get-1-uri-list';
import { getItemResourceTransactionGet } from '../fn/transaction-entity-controller/get-item-resource-transaction-get';
import { GetItemResourceTransactionGet$Params } from '../fn/transaction-entity-controller/get-item-resource-transaction-get';
import { PagedModelEntityModelTransaction } from '../models/paged-model-entity-model-transaction';
import { patchItemResourceTransactionPatch } from '../fn/transaction-entity-controller/patch-item-resource-transaction-patch';
import { PatchItemResourceTransactionPatch$Params } from '../fn/transaction-entity-controller/patch-item-resource-transaction-patch';
import { postCollectionResourceTransactionPost } from '../fn/transaction-entity-controller/post-collection-resource-transaction-post';
import { PostCollectionResourceTransactionPost$Params } from '../fn/transaction-entity-controller/post-collection-resource-transaction-post';
import { putItemResourceTransactionPut } from '../fn/transaction-entity-controller/put-item-resource-transaction-put';
import { PutItemResourceTransactionPut$Params } from '../fn/transaction-entity-controller/put-item-resource-transaction-put';

@Injectable({ providedIn: 'root' })
export class TransactionEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceTransactionGet1()` */
  static readonly GetCollectionResourceTransactionGet1Path = '/transactions';

  /**
   * get-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTransactionGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTransactionGet1$Json$Response(params?: GetCollectionResourceTransactionGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelTransaction>> {
    return getCollectionResourceTransactionGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTransactionGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTransactionGet1$Json(params?: GetCollectionResourceTransactionGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelTransaction> {
    return this.getCollectionResourceTransactionGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelTransaction>): PagedModelEntityModelTransaction => r.body)
    );
  }

  /**
   * get-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceTransactionGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTransactionGet1$UriList$Response(params?: GetCollectionResourceTransactionGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceTransactionGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceTransactionGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceTransactionGet1$UriList(params?: GetCollectionResourceTransactionGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceTransactionGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceTransactionPost()` */
  static readonly PostCollectionResourceTransactionPostPath = '/transactions';

  /**
   * create-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceTransactionPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTransactionPost$Response(params: PostCollectionResourceTransactionPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return postCollectionResourceTransactionPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceTransactionPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceTransactionPost(params: PostCollectionResourceTransactionPost$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.postCollectionResourceTransactionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `getItemResourceTransactionGet()` */
  static readonly GetItemResourceTransactionGetPath = '/transactions/{id}';

  /**
   * get-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceTransactionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTransactionGet$Response(params: GetItemResourceTransactionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return getItemResourceTransactionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceTransactionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceTransactionGet(params: GetItemResourceTransactionGet$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.getItemResourceTransactionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `putItemResourceTransactionPut()` */
  static readonly PutItemResourceTransactionPutPath = '/transactions/{id}';

  /**
   * update-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceTransactionPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTransactionPut$Response(params: PutItemResourceTransactionPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return putItemResourceTransactionPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceTransactionPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceTransactionPut(params: PutItemResourceTransactionPut$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.putItemResourceTransactionPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceTransactionDelete()` */
  static readonly DeleteItemResourceTransactionDeletePath = '/transactions/{id}';

  /**
   * delete-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceTransactionDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTransactionDelete$Response(params: DeleteItemResourceTransactionDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceTransactionDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceTransactionDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceTransactionDelete(params: DeleteItemResourceTransactionDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceTransactionDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceTransactionPatch()` */
  static readonly PatchItemResourceTransactionPatchPath = '/transactions/{id}';

  /**
   * patch-transaction
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceTransactionPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTransactionPatch$Response(params: PatchItemResourceTransactionPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return patchItemResourceTransactionPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-transaction
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceTransactionPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceTransactionPatch(params: PatchItemResourceTransactionPatch$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.patchItemResourceTransactionPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

}
