/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createPropertyReferenceRolePatch$Json } from '../fn/role-property-reference-controller/create-property-reference-role-patch-json';
import { CreatePropertyReferenceRolePatch$Json$Params } from '../fn/role-property-reference-controller/create-property-reference-role-patch-json';
import { createPropertyReferenceRolePatch$UriList } from '../fn/role-property-reference-controller/create-property-reference-role-patch-uri-list';
import { CreatePropertyReferenceRolePatch$UriList$Params } from '../fn/role-property-reference-controller/create-property-reference-role-patch-uri-list';
import { createPropertyReferenceRolePut$Json } from '../fn/role-property-reference-controller/create-property-reference-role-put-json';
import { CreatePropertyReferenceRolePut$Json$Params } from '../fn/role-property-reference-controller/create-property-reference-role-put-json';
import { createPropertyReferenceRolePut$UriList } from '../fn/role-property-reference-controller/create-property-reference-role-put-uri-list';
import { CreatePropertyReferenceRolePut$UriList$Params } from '../fn/role-property-reference-controller/create-property-reference-role-put-uri-list';
import { deletePropertyReferenceIdRoleDelete } from '../fn/role-property-reference-controller/delete-property-reference-id-role-delete';
import { DeletePropertyReferenceIdRoleDelete$Params } from '../fn/role-property-reference-controller/delete-property-reference-id-role-delete';
import { deletePropertyReferenceRoleDelete } from '../fn/role-property-reference-controller/delete-property-reference-role-delete';
import { DeletePropertyReferenceRoleDelete$Params } from '../fn/role-property-reference-controller/delete-property-reference-role-delete';
import { EntityModelUser } from '../models/entity-model-user';
import { followPropertyReferenceRoleGet } from '../fn/role-property-reference-controller/follow-property-reference-role-get';
import { FollowPropertyReferenceRoleGet$Params } from '../fn/role-property-reference-controller/follow-property-reference-role-get';
import { followPropertyReferenceRoleGet1$Json } from '../fn/role-property-reference-controller/follow-property-reference-role-get-1-json';
import { FollowPropertyReferenceRoleGet1$Json$Params } from '../fn/role-property-reference-controller/follow-property-reference-role-get-1-json';
import { followPropertyReferenceRoleGet1$UriList } from '../fn/role-property-reference-controller/follow-property-reference-role-get-1-uri-list';
import { FollowPropertyReferenceRoleGet1$UriList$Params } from '../fn/role-property-reference-controller/follow-property-reference-role-get-1-uri-list';

@Injectable({ providedIn: 'root' })
export class RolePropertyReferenceControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `followPropertyReferenceRoleGet1()` */
  static readonly FollowPropertyReferenceRoleGet1Path = '/roles/{id}/user';

  /**
   * get-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRoleGet1$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet1$Json$Response(params: FollowPropertyReferenceRoleGet1$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceRoleGet1$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRoleGet1$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet1$Json(params: FollowPropertyReferenceRoleGet1$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceRoleGet1$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * get-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRoleGet1$UriList()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet1$UriList$Response(params: FollowPropertyReferenceRoleGet1$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<string>> {
    return followPropertyReferenceRoleGet1$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRoleGet1$UriList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet1$UriList(params: FollowPropertyReferenceRoleGet1$UriList$Params, context?: HttpContext): Observable<string> {
    return this.followPropertyReferenceRoleGet1$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<string>): string => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceRolePut()` */
  static readonly CreatePropertyReferenceRolePutPath = '/roles/{id}/user';

  /**
   * update-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRolePut$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRolePut$Json$Response(params: CreatePropertyReferenceRolePut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceRolePut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRolePut$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRolePut$Json(params: CreatePropertyReferenceRolePut$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceRolePut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * update-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRolePut$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRolePut$UriList$Response(params: CreatePropertyReferenceRolePut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceRolePut$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * update-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRolePut$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRolePut$UriList(params: CreatePropertyReferenceRolePut$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceRolePut$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceRoleDelete()` */
  static readonly DeletePropertyReferenceRoleDeletePath = '/roles/{id}/user';

  /**
   * delete-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceRoleDelete$Response(params: DeletePropertyReferenceRoleDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceRoleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceRoleDelete(params: DeletePropertyReferenceRoleDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceRoleDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createPropertyReferenceRolePatch()` */
  static readonly CreatePropertyReferenceRolePatchPath = '/roles/{id}/user';

  /**
   * patch-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRolePatch$Json()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRolePatch$Json$Response(params: CreatePropertyReferenceRolePatch$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceRolePatch$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRolePatch$Json$Response()` instead.
   *
   * This method sends `application/x-spring-data-compact+json` and handles request body of type `application/x-spring-data-compact+json`.
   */
  createPropertyReferenceRolePatch$Json(params: CreatePropertyReferenceRolePatch$Json$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceRolePatch$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /**
   * patch-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPropertyReferenceRolePatch$UriList()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRolePatch$UriList$Response(params: CreatePropertyReferenceRolePatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return createPropertyReferenceRolePatch$UriList(this.http, this.rootUrl, params, context);
  }

  /**
   * patch-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPropertyReferenceRolePatch$UriList$Response()` instead.
   *
   * This method sends `text/uri-list` and handles request body of type `text/uri-list`.
   */
  createPropertyReferenceRolePatch$UriList(params: CreatePropertyReferenceRolePatch$UriList$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.createPropertyReferenceRolePatch$UriList$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `followPropertyReferenceRoleGet()` */
  static readonly FollowPropertyReferenceRoleGetPath = '/roles/{id}/user/{propertyId}';

  /**
   * get-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `followPropertyReferenceRoleGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet$Response(params: FollowPropertyReferenceRoleGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
    return followPropertyReferenceRoleGet(this.http, this.rootUrl, params, context);
  }

  /**
   * get-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `followPropertyReferenceRoleGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  followPropertyReferenceRoleGet(params: FollowPropertyReferenceRoleGet$Params, context?: HttpContext): Observable<EntityModelUser> {
    return this.followPropertyReferenceRoleGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelUser>): EntityModelUser => r.body)
    );
  }

  /** Path part for operation `deletePropertyReferenceIdRoleDelete()` */
  static readonly DeletePropertyReferenceIdRoleDeletePath = '/roles/{id}/user/{propertyId}';

  /**
   * delete-user-by-role-Id
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePropertyReferenceIdRoleDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdRoleDelete$Response(params: DeletePropertyReferenceIdRoleDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deletePropertyReferenceIdRoleDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * delete-user-by-role-Id
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePropertyReferenceIdRoleDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePropertyReferenceIdRoleDelete(params: DeletePropertyReferenceIdRoleDelete$Params, context?: HttpContext): Observable<void> {
    return this.deletePropertyReferenceIdRoleDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
