/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelTransaction } from '../../models/entity-model-transaction';
import { TransactionRequestBody } from '../../models/transaction-request-body';

export interface PatchItemResourceTransactionPatch$Params {
  id: string;
      body: TransactionRequestBody
}

export function patchItemResourceTransactionPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceTransactionPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceTransactionPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceTransactionPatch.PATH = '/transactions/{id}';
