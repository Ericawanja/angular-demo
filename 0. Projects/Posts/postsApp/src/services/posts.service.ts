import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  BASEURL: string = 'https://posts-732d2-default-rtdb.firebaseio.com';
  constructor(public http: HttpClient) {}
  getPosts(): Observable<any> {
    return this.http.get(`${this.BASEURL}/posts.json`);
  }
  deletePosts(id: string): Observable<any> {
    console.log('deleting....', id)
    return this.http.delete(`${this.BASEURL}/posts/${id}.json`);
  }
}
