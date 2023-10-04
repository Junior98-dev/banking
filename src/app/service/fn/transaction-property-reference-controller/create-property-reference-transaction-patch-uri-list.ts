/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelUser } from '../../models/entity-model-user';

export interface CreatePropertyReferenceTransactionPatch$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceTransactionPatch$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceTransactionPatch$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelUser>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceTransactionPatch$UriList.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelUser>;
    })
  );
}

createPropertyReferenceTransactionPatch$UriList.PATH = '/transactions/{id}/user';
