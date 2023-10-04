/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { EntityModelAccount } from '../models/entity-model-account';
import { executeSearchAccountGet } from '../fn/account-search-controller/execute-search-account-get';
import { ExecuteSearchAccountGet$Params } from '../fn/account-search-controller/execute-search-account-get';
import { executeSearchAccountGet1 } from '../fn/account-search-controller/execute-search-account-get-1';
import { ExecuteSearchAccountGet1$Params } from '../fn/account-search-controller/execute-search-account-get-1';

@Injectable({ providedIn: 'root' })
export class AccountSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchAccountGet()` */
  static readonly ExecuteSearchAccountGetPath = '/accounts/search/findByIban';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchAccountGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchAccountGet$Response(params?: ExecuteSearchAccountGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return executeSearchAccountGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchAccountGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchAccountGet(params?: ExecuteSearchAccountGet$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.executeSearchAccountGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

  /** Path part for operation `executeSearchAccountGet1()` */
  static readonly ExecuteSearchAccountGet1Path = '/accounts/search/findByUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchAccountGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchAccountGet1$Response(params?: ExecuteSearchAccountGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
    return executeSearchAccountGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchAccountGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchAccountGet1(params?: ExecuteSearchAccountGet1$Params, context?: HttpContext): Observable<EntityModelAccount> {
    return this.executeSearchAccountGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelAccount>): EntityModelAccount => r.body)
    );
  }

}
