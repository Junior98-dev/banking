/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactRequestBody } from '../../models/contact-request-body';
import { EntityModelContact } from '../../models/entity-model-contact';

export interface PatchItemResourceContactPatch$Params {
  id: string;
      body: ContactRequestBody
}

export function patchItemResourceContactPatch(http: HttpClient, rootUrl: string, params: PatchItemResourceContactPatch$Params, context?: HttpContext): Observable<StrictHttpResponse<EntityModelContact>> {
  const rb = new RequestBuilder(rootUrl, patchItemResourceContactPatch.PATH, 'patch');
  if (params) {
    rb.path('id', params.id, {});
    rb.body(params.body, 'application/json');
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

patchItemResourceContactPatch.PATH = '/contacts/{id}';
