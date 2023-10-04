/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelContact } from '../../models/entity-model-contact';

export interface GetItemResourceContactGet$Params {
  id: string;
}

export function getItemResourceContactGet(http: HttpClient, rootUrl: string, params: GetItemResourceContactGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
  const rb = new RequestBuilder(rootUrl, getItemResourceContactGet.PATH, 'get');
  if (params) {
    rb.path('id', params.id, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/hal+json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<EntityModelContact>;
    })
  );
}

getItemResourceContactGet.PATH = '/contacts/{id}';
