/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelTransaction } from '../../models/entity-model-transaction';

export interface ExecuteSearchTransactionGet2$Params {
  userId?: number;
  transactionType?: 'Transfert' | 'depot';
}

export function executeSearchTransactionGet2(http: HttpClient, rootUrl: string, params?: ExecuteSearchTransactionGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, executeSearchTransactionGet2.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
    rb.query('transactionType', params.transactionType, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelTransaction>;
    })
  );
}

executeSearchTransactionGet2.PATH = '/transactions/search/findHighestAmountByTransactionType';
