import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(public http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get('https://posts-732d2-default-rtdb.firebaseio.com/posts.json');
  }
}
