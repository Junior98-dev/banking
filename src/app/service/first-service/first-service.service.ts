import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  rootUrl = 'http://localhost:8286';

  constructor(private httpClient: HttpClient){}

  findAlltransactions():Observable<any>{
    let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXNwb2lyQGdtYWlsLmNvbSIsImlhdCI6MTY5NjQyMjYxNCwiZXhwIjozMzkyODQ1MjI5NTF9.wSkxXbpMaSyiRjCwFhrcKI4bYd_yV_tXA_1Q1Ra8f9g');
    const request = new HttpRequest<any>(
      'GET',
      this.rootUrl + '/transactions/',
      {
        headers: _headers,
        params: null,
        responseType: 'json'
      }
    );
    return this.httpClient.request(request)
    .pipe(
      filter(r => r instanceof HttpResponse),
      map(res => res as any)
    );
  }

}
