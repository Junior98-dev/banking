/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelContact } from '../models/collection-model-entity-model-contact';
import { executeSearchContactGet } from '../fn/contact-search-controller/execute-search-contact-get';
import { ExecuteSearchContactGet$Params } from '../fn/contact-search-controller/execute-search-contact-get';

@Injectable({ providedIn: 'root' })
export class ContactSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchContactGet()` */
  static readonly ExecuteSearchContactGetPath = '/contacts/search/findByUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchContactGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchContactGet$Response(params?: ExecuteSearchContactGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelContact>> {
    return executeSearchContactGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchContactGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchContactGet(params?: ExecuteSearchContactGet$Params, context?: HttpContext): Observable<CollectionModelEntityModelContact> {
    return this.executeSearchContactGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelContact>): CollectionModelEntityModelContact => r.body)
    );
  }

}
