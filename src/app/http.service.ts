import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }

  getLotrBooks(): Promise<any> { 
    return this.http.get(`${environment.apiUrl}/book`).toPromise();

    // A put or post request would take a body like this:
    // this.http.post(url, { this is the body object }, headers)
  }
}
