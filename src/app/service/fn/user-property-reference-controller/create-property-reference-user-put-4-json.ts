/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelObject } from '../../models/collection-model-object';
import { CollectionModelTransaction } from '../../models/collection-model-transaction';

export interface CreatePropertyReferenceUserPut4$Json$Params {
  id: string;
      body: CollectionModelObject
}

export function createPropertyReferenceUserPut4$Json(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPut4$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPut4$Json.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/x-spring-data-compact+json');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelTransaction>;
    })
  );
}

createPropertyReferenceUserPut4$Json.PATH = '/users/{id}/transactions';
