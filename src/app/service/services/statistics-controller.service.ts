/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { findSumTranctionsByDate } from '../fn/statistics-controller/find-sum-tranctions-by-date';
import { FindSumTranctionsByDate$Params } from '../fn/statistics-controller/find-sum-tranctions-by-date';
import { getAccountBalance } from '../fn/statistics-controller/get-account-balance';
import { GetAccountBalance$Params } from '../fn/statistics-controller/get-account-balance';
import { highesDeposit } from '../fn/statistics-controller/highes-deposit';
import { HighesDeposit$Params } from '../fn/statistics-controller/highes-deposit';
import { highesTransfert } from '../fn/statistics-controller/highes-transfert';
import { HighesTransfert$Params } from '../fn/statistics-controller/highes-transfert';
import { TransactionSumDetails } from '../models/transaction-sum-details';

@Injectable({ providedIn: 'root' })
export class StatisticsControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findSumTranctionsByDate()` */
  static readonly FindSumTranctionsByDatePath = '/statistics/sum-by-date/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findSumTranctionsByDate()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTranctionsByDate$Response(params: FindSumTranctionsByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionSumDetails>>> {
    return findSumTranctionsByDate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findSumTranctionsByDate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findSumTranctionsByDate(params: FindSumTranctionsByDate$Params, context?: HttpContext): Observable<Array<TransactionSumDetails>> {
    return this.findSumTranctionsByDate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<TransactionSumDetails>>): Array<TransactionSumDetails> => r.body)
    );
  }

  /** Path part for operation `highesTransfert()` */
  static readonly HighesTransfertPath = '/statistics/highest-transfert/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highesTransfert()` instead.
   *
   * This method doesn't expect any request body.
   */
  highesTransfert$Response(params: HighesTransfert$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highesTransfert(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highesTransfert$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highesTransfert(params: HighesTransfert$Params, context?: HttpContext): Observable<number> {
    return this.highesTransfert$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `highesDeposit()` */
  static readonly HighesDepositPath = '/statistics/highest-deposit/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `highesDeposit()` instead.
   *
   * This method doesn't expect any request body.
   */
  highesDeposit$Response(params: HighesDeposit$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return highesDeposit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `highesDeposit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  highesDeposit(params: HighesDeposit$Params, context?: HttpContext): Observable<number> {
    return this.highesDeposit$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `getAccountBalance()` */
  static readonly GetAccountBalancePath = '/statistics/account-balance/{user-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAccountBalance()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalance$Response(params: GetAccountBalance$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return getAccountBalance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAccountBalance$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAccountBalance(params: GetAccountBalance$Params, context?: HttpContext): Observable<number> {
    return this.getAccountBalance$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
