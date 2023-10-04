/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelAccount } from '../../models/entity-model-account';

export interface CreatePropertyReferenceUserPut$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceUserPut$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPut$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPut$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelAccount>;
    })
  );
}

createPropertyReferenceUserPut$UriList.PATH = '/users/{id}/account';
