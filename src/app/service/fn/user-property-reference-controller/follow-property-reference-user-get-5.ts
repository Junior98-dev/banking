/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelTransaction } from '../../models/collection-model-transaction';

export interface FollowPropertyReferenceUserGet5$Params {
  id: string;
  propertyId: string;
}

export function followPropertyReferenceUserGet5(http: HttpClient, rootUrl: string, params: FollowPropertyReferenceUserGet5$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelTransaction>> {
  const rb = new RequestBuilder(rootUrl, followPropertyReferenceUserGet5.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
    rb.path('propertyId', params.propertyId, {});
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

followPropertyReferenceUserGet5.PATH = '/users/{id}/transactions/{propertyId}';
