/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { deleteItemResourceContactDelete } from '../fn/contact-entity-controller/delete-item-resource-contact-delete';
import { DeleteItemResourceContactDelete$Params } from '../fn/contact-entity-controller/delete-item-resource-contact-delete';
import { EntityModelContact } from '../models/entity-model-contact';
import { getCollectionResourceContactGet1$Json } from '../fn/contact-entity-controller/get-collection-resource-contact-get-1-json';
import { GetCollectionResourceContactGet1$Json$Params } from '../fn/contact-entity-controller/get-collection-resource-contact-get-1-json';
import { getCollectionResourceContactGet1$UriList } from '../fn/contact-entity-controller/get-collection-resource-contact-get-1-uri-list';
import { GetCollectionResourceContactGet1$UriList$Params } from '../fn/contact-entity-controller/get-collection-resource-contact-get-1-uri-list';
import { getItemResourceContactGet } from '../fn/contact-entity-controller/get-item-resource-contact-get';
import { GetItemResourceContactGet$Params } from '../fn/contact-entity-controller/get-item-resource-contact-get';
import { PagedModelEntityModelContact } from '../models/paged-model-entity-model-contact';
import { patchItemResourceContactPatch } from '../fn/contact-entity-controller/patch-item-resource-contact-patch';
import { PatchItemResourceContactPatch$Params } from '../fn/contact-entity-controller/patch-item-resource-contact-patch';
import { postCollectionResourceContactPost } from '../fn/contact-entity-controller/post-collection-resource-contact-post';
import { PostCollectionResourceContactPost$Params } from '../fn/contact-entity-controller/post-collection-resource-contact-post';
import { putItemResourceContactPut } from '../fn/contact-entity-controller/put-item-resource-contact-put';
import { PutItemResourceContactPut$Params } from '../fn/contact-entity-controller/put-item-resource-contact-put';

@Injectable({ providedIn: 'root' })
export class ContactEntityControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getCollectionResourceContactGet1()` */
  static readonly GetCollectionResourceContactGet1Path = '/contacts';

  /**
   * get-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceContactGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceContactGet1$Json$Response(params?: GetCollectionResourceContactGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<PagedModelEntityModelContact>> {
    return getCollectionResourceContactGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceContactGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceContactGet1$Json(params?: GetCollectionResourceContactGet1$Json$Params, context?: HttpContext): Observable<PagedModelEntityModelContact> {
    return this.getCollectionResourceContactGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<PagedModelEntityModelContact>): PagedModelEntityModelContact => r.body)
    );
  }

  /**
   * get-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCollectionResourceContactGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceContactGet1$UriList$Response(params?: GetCollectionResourceContactGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return getCollectionResourceContactGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getCollectionResourceContactGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCollectionResourceContactGet1$UriList(params?: GetCollectionResourceContactGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.getCollectionResourceContactGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `postCollectionResourceContactPost()` */
  static readonly PostCollectionResourceContactPostPath = '/contacts';

  /**
   * create-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postCollectionResourceContactPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceContactPost$Response(params: PostCollectionResourceContactPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
    return postCollectionResourceContactPost(this.http, this.rootUrl, params, context);
  }

  /**
   * create-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `postCollectionResourceContactPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  postCollectionResourceContactPost(params: PostCollectionResourceContactPost$Params, context?: HttpContext): Observable<EntityModelContact> {
    return this.postCollectionResourceContactPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelContact>): EntityModelContact => r.body)
    );
  }

  /** Path part for operation `getItemResourceContactGet()` */
  static readonly GetItemResourceContactGetPath = '/contacts/{id}';

  /**
   * get-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getItemResourceContactGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceContactGet$Response(params: GetItemResourceContactGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
    return getItemResourceContactGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getItemResourceContactGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getItemResourceContactGet(params: GetItemResourceContactGet$Params, context?: HttpContext): Observable<EntityModelContact> {
    return this.getItemResourceContactGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelContact>): EntityModelContact => r.body)
    );
  }

  /** Path part for operation `putItemResourceContactPut()` */
  static readonly PutItemResourceContactPutPath = '/contacts/{id}';

  /**
   * update-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `putItemResourceContactPut()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceContactPut$Response(params: PutItemResourceContactPut$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
    return putItemResourceContactPut(this.http, this.rootUrl, params, context);
  }

  /**
   * update-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `putItemResourceContactPut$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  putItemResourceContactPut(params: PutItemResourceContactPut$Params, context?: HttpContext): Observable<EntityModelContact> {
    return this.putItemResourceContactPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelContact>): EntityModelContact => r.body)
    );
  }

  /** Path part for operation `deleteItemResourceContactDelete()` */
  static readonly DeleteItemResourceContactDeletePath = '/contacts/{id}';

  /**
   * delete-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteItemResourceContactDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceContactDelete$Response(params: DeleteItemResourceContactDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteItemResourceContactDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteItemResourceContactDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteItemResourceContactDelete(params: DeleteItemResourceContactDelete$Params, context?: HttpContext): Observable<void> {
    return this.deleteItemResourceContactDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `patchItemResourceContactPatch()` */
  static readonly PatchItemResourceContactPatchPath = '/contacts/{id}';

  /**
   * patch-contact
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchItemResourceContactPatch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceContactPatch$Response(params: PatchItemResourceContactPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
    return patchItemResourceContactPatch(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-contact
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `patchItemResourceContactPatch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchItemResourceContactPatch(params: PatchItemResourceContactPatch$Params, context?: HttpContext): Observable<EntityModelContact> {
    return this.patchItemResourceContactPatch$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelContact>): EntityModelContact => r.body)
    );
  }

}
