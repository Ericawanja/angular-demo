import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipost } from 'src/interfaces';

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
    console.log('deleting....', id);
    return this.http.delete(`${this.BASEURL}/posts/${id}.json`);
  }
  postData(data: Ipost): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    return this.http.post(
      `${this.BASEURL}/posts.json`,
      { ...data },
      { headers: headers }
    );
  }
  editPost(data: Ipost): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    console.log(data)
    return this.http.put(
      `${this.BASEURL}/posts/${data.id}.json`,
      { title: data.title, date: data.date },
      { headers }
    );
  }
}
