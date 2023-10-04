/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceContactPatch$Json } from '../fn/contact-property-reference-controller/create-property-reference-contact-patch-json';
import { CreatePropertyReferenceContactPatch$Json$Params } from '../fn/contact-property-reference-controller/create-property-reference-contact-patch-json';
import { createPropertyReferenceContactPatch$UriList } from '../fn/contact-property-reference-controller/create-property-reference-contact-patch-uri-list';
import { CreatePropertyReferenceContactPatch$UriList$Params } from '../fn/contact-property-reference-controller/create-property-reference-contact-patch-uri-list';
import { createPropertyReferenceContactPut$Json } from '../fn/contact-property-reference-controller/create-property-reference-contact-put-json';
import { CreatePropertyReferenceContactPut$Json$Params } from '../fn/contact-property-reference-controller/create-property-reference-contact-put-json';
import { createPropertyReferenceContactPut$UriList } from '../fn/contact-property-reference-controller/create-property-reference-contact-put-uri-list';
import { CreatePropertyReferenceContactPut$UriList$Params } from '../fn/contact-property-reference-controller/create-property-reference-contact-put-uri-list';
import { deletePropertyReferenceContactDelete } from '../fn/contact-property-reference-controller/delete-property-reference-contact-delete';
import { DeletePropertyReferenceContactDelete$Params } from '../fn/contact-property-reference-controller/delete-property-reference-contact-delete';
import { deletePropertyReferenceIdContactDelete } from '../fn/contact-property-reference-controller/delete-property-reference-id-contact-delete';
import { DeletePropertyReferenceIdContactDelete$Params } from '../fn/contact-property-reference-controller/delete-property-reference-id-contact-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceContactGet } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get';
import { FollowPropertyReferenceContactGet$Params } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get';
import { followPropertyReferenceContactGet1$Json } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get-1-json';
import { FollowPropertyReferenceContactGet1$Json$Params } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get-1-json';
import { followPropertyReferenceContactGet1$UriList } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get-1-uri-list';
import { FollowPropertyReferenceContactGet1$UriList$Params } from '../fn/contact-property-reference-controller/follow-property-reference-contact-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class ContactPropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceContactGet1()` */
  static readonly FollowPropertyReferenceContactGet1Path = '/contacts/{id}/user';

  /**
   * get-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceContactGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet1$Json$Response(params: FollowPropertyReferenceContactGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceContactGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceContactGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet1$Json(params: FollowPropertyReferenceContactGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceContactGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceContactGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet1$UriList$Response(params: FollowPropertyReferenceContactGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceContactGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceContactGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet1$UriList(params: FollowPropertyReferenceContactGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceContactGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceContactPut()` */
  static readonly CreatePropertyReferenceContactPutPath = '/contacts/{id}/user';

  /**
   * update-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceContactPut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceContactPut$Json$Response(params: CreatePropertyReferenceContactPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceContactPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceContactPut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceContactPut$Json(params: CreatePropertyReferenceContactPut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceContactPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceContactPut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceContactPut$UriList$Response(params: CreatePropertyReferenceContactPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceContactPut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceContactPut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceContactPut$UriList(params: CreatePropertyReferenceContactPut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceContactPut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceContactDelete()` */
  static readonly DeletePropertyReferenceContactDeletePath = '/contacts/{id}/user';

  /**
   * delete-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceContactDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceContactDelete$Response(params: DeletePropertyReferenceContactDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceContactDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceContactDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceContactDelete(params: DeletePropertyReferenceContactDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceContactDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceContactPatch()` */
  static readonly CreatePropertyReferenceContactPatchPath = '/contacts/{id}/user';

  /**
   * patch-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceContactPatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceContactPatch$Json$Response(params: CreatePropertyReferenceContactPatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceContactPatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceContactPatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceContactPatch$Json(params: CreatePropertyReferenceContactPatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceContactPatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceContactPatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceContactPatch$UriList$Response(params: CreatePropertyReferenceContactPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceContactPatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceContactPatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceContactPatch$UriList(params: CreatePropertyReferenceContactPatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceContactPatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceContactGet()` */
  static readonly FollowPropertyReferenceContactGetPath = '/contacts/{id}/user/{propertyId}';

  /**
   * get-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceContactGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet$Response(params: FollowPropertyReferenceContactGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceContactGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceContactGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceContactGet(params: FollowPropertyReferenceContactGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceContactGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdContactDelete()` */
  static readonly DeletePropertyReferenceIdContactDeletePath = '/contacts/{id}/user/{propertyId}';

  /**
   * delete-user-by-contact-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdContactDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdContactDelete$Response(params: DeletePropertyReferenceIdContactDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdContactDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-contact-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdContactDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdContactDelete(params: DeletePropertyReferenceIdContactDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdContactDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
