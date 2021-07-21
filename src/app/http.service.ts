import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

import { lotrApiKey } from '../secret';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }

  getPosts(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/posts`).toPromise();

    // A put or post request would take a body like this:
    // this.http.post(url, { this is the body object }, headers)
  }

  createPost(post: any): Promise<any> {
    return this.http.post(
      `${environment.apiUrl}/posts`,
      post,
      {
        headers: {
          'Content-Type': 'application/json'
          // Authorization: `Bearer ${lotrApiKey}`
        }
      }
    )
      .toPromise();
  }
}
