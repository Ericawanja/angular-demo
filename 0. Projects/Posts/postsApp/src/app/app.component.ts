import { Component } from '@angular/core';
import { PostService } from 'src/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'postsApp';
  loading: boolean = false;
  errorMessage: any;
  posts: any;

  constructor(private postsService: PostService) {}
  public getPosts() {
    this.loading = true;
    this.postsService.getPosts().subscribe(
      (response) => {
        console.log(response);
        this.posts = response;
      },
      (error) => {
        this.errorMessage = error;
        this.loading = false;
        console.log('An error occured', error);
      },
      () => {
        this.loading = false;
        console.log('The request completed');
      }
    );
  }
}
