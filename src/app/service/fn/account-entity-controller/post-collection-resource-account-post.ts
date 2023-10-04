/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { AccountRequestBody } from '../../models/account-request-body';
import { EntityModelAccount } from '../../models/entity-model-account';

export interface PostCollectionResourceAccountPost$Params {
      body: AccountRequestBody
}

export function postCollectionResourceAccountPost(http: HttpClient, rootUrl: string, params: PostCollectionResourceAccountPost$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelAccount>> {
  const rb = new RequestBuilder(rootUrl, postCollectionResourceAccountPost.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
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

postCollectionResourceAccountPost.PATH = '/accounts';
