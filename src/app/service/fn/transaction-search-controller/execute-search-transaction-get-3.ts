/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelTransaction } from '../../models/collection-model-entity-model-transaction';

export interface ExecuteSearchTransactionGet3$Params {
  start?: string;
  end?: string;
  userId?: number;
}

export function executeSearchTransactionGet3(http: HttpClient, rootUrl: string, params?: ExecuteSearchTransactionGet3$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, executeSearchTransactionGet3.PATH, 'get');
  if (params) {
    rb.query('start', params.start, {});
    rb.query('end', params.end, {});
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelTransaction>;
    })
  );
}

executeSearchTransactionGet3.PATH = '/transactions/search/findSumTransactionByDate';
