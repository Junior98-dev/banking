/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { EntityModelAccount } from '../../models/entity-model-account';

export interface ExecuteSearchAccountGet$Params {
  iban?: string;
}

export function executeSearchAccountGet(http: HttpClient, rootUrl: string, params?: ExecuteSearchAccountGet$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
  const rb = new RequestBuilder(rootUrl, executeSearchAccountGet.PATH, 'get');
  if (params) {
    rb.query('iban', params.iban, {});
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

executeSearchAccountGet.PATH = '/accounts/search/findByIban';
