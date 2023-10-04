/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelTransaction } from '../../models/entity-model-transaction';

export interface GetItemResourceTransactionGet$Params {
  id: string;
}

export function getItemResourceTransactionGet(http: HttpClient, rootUrl: string, params: GetItemResourceTransactionGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceTransactionGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
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

getItemResourceTransactionGet.PATH = '/transactions/{id}';
