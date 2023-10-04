/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelTransaction } from '../../models/collection-model-entity-model-transaction';

export interface ExecuteSearchTransactionGet1$Params {
  userId?: number;
}

export function executeSearchTransactionGet1(http: HttpClient, rootUrl: string, params?: ExecuteSearchTransactionGet1$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, executeSearchTransactionGet1.PATH, 'get');
  if (params) {
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

executeSearchTransactionGet1.PATH = '/transactions/search/findByUserId';
