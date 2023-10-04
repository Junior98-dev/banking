/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { CollectionModelEntityModelTransaction } from '../models/collection-model-entity-model-transaction';
import { EntityModelTransaction } from '../models/entity-model-transaction';
import { executeSearchTransactionGet } from '../fn/transaction-search-controller/execute-search-transaction-get';
import { ExecuteSearchTransactionGet$Params } from '../fn/transaction-search-controller/execute-search-transaction-get';
import { executeSearchTransactionGet1 } from '../fn/transaction-search-controller/execute-search-transaction-get-1';
import { ExecuteSearchTransactionGet1$Params } from '../fn/transaction-search-controller/execute-search-transaction-get-1';
import { executeSearchTransactionGet2 } from '../fn/transaction-search-controller/execute-search-transaction-get-2';
import { ExecuteSearchTransactionGet2$Params } from '../fn/transaction-search-controller/execute-search-transaction-get-2';
import { executeSearchTransactionGet3 } from '../fn/transaction-search-controller/execute-search-transaction-get-3';
import { ExecuteSearchTransactionGet3$Params } from '../fn/transaction-search-controller/execute-search-transaction-get-3';

@Injectable({ providedIn: 'root' })
export class TransactionSearchControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `executeSearchTransactionGet()` */
  static readonly ExecuteSearchTransactionGetPath = '/transactions/search/findAccountBalance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTransactionGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet$Response(params?: ExecuteSearchTransactionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return executeSearchTransactionGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTransactionGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet(params?: ExecuteSearchTransactionGet$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.executeSearchTransactionGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `executeSearchTransactionGet1()` */
  static readonly ExecuteSearchTransactionGet1Path = '/transactions/search/findByUserId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTransactionGet1()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet1$Response(params?: ExecuteSearchTransactionGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelTransaction>> {
    return executeSearchTransactionGet1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTransactionGet1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet1(params?: ExecuteSearchTransactionGet1$Params, context?: HttpContext): Observable<CollectionModelEntityModelTransaction> {
    return this.executeSearchTransactionGet1$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelTransaction>): CollectionModelEntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `executeSearchTransactionGet2()` */
  static readonly ExecuteSearchTransactionGet2Path = '/transactions/search/findHighestAmountByTransactionType';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTransactionGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet2$Response(params?: ExecuteSearchTransactionGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
    return executeSearchTransactionGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTransactionGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet2(params?: ExecuteSearchTransactionGet2$Params, context?: HttpContext): Observable<EntityModelTransaction> {
    return this.executeSearchTransactionGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<EntityModelTransaction>): EntityModelTransaction => r.body)
    );
  }

  /** Path part for operation `executeSearchTransactionGet3()` */
  static readonly ExecuteSearchTransactionGet3Path = '/transactions/search/findSumTransactionByDate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `executeSearchTransactionGet3()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet3$Response(params?: ExecuteSearchTransactionGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelTransaction>> {
    return executeSearchTransactionGet3(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `executeSearchTransactionGet3$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  executeSearchTransactionGet3(params?: ExecuteSearchTransactionGet3$Params, context?: HttpContext): Observable<CollectionModelEntityModelTransaction> {
    return this.executeSearchTransactionGet3$Response(params, context).pipe(
      map((r: StrictHttpResponse<CollectionModelEntityModelTransaction>): CollectionModelEntityModelTransaction => r.body)
    );
  }

}
