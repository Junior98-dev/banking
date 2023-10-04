import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXNwb2lyQGdtYWlsLmNvbSIsImlhdCI6MTY5NjQ2MjY2MSwiZXhwIjozMzkyOTI1MzIyMzJ9.07dP5PhKnz8dkkO4r4xhMq6dzqvtiEr0ahC_7Mk0Xqw';

    if(token !== undefined && token !== null){
      // assigner le token
      
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token
        })
      });
      return next.handle(authReq);
    }
    return next.handle(req);

  }
}
