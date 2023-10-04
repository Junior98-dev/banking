/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelContact } from '../../models/collection-model-contact';

export interface CreatePropertyReferenceUserPut2$UriList$Params {
  id: string;
      body: string
}

export function createPropertyReferenceUserPut2$UriList(http: HttpClient, rootUrl: string, params: CreatePropertyReferenceUserPut2$UriList$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelContact>> {
  const rb = new RequestBuilder(rootUrl, createPropertyReferenceUserPut2$UriList.PATH, 'put');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'text/uri-list');
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelContact>;
    })
  );
}

createPropertyReferenceUserPut2$UriList.PATH = '/users/{id}/contacts';
