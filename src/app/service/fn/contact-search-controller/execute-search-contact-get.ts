/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { CollectionModelEntityModelContact } from '../../models/collection-model-entity-model-contact';

export interface ExecuteSearchContactGet$Params {
  userId?: number;
}

export function executeSearchContactGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchContactGet$Params, context?: HttpContext): Observable<StrictHttpResponse<CollectionModelEntityModelContact>> {
  const rb = new RequestBuilder(rootUrl, executeSearchContactGet.PATH, 'get');
  if (params) {
    rb.query('userId', params.userId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<CollectionModelEntityModelContact>;
    })
  );
}

executeSearchContactGet.PATH = '/contacts/search/findByUserId';
