import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/posts.service';
import { TransformResponse } from './responseTransform.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransformResponse],
})
export class AppComponent implements OnInit {
  title = 'postsApp';
  loading: boolean = false;
  errorMessage: any;
  posts: any;

  constructor(
    private postsService: PostService,
    private formatData: TransformResponse
  ) {}
  getPosts() {
    this.loading = true;
    this.postsService.getPosts().subscribe(
      (response) => {
        this.posts = this.formatData.transform(response);
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
  ngOnInit(): void {
    this.getPosts();
  }
  handleDelete(id: string): void {
    this.loading = true;
    this.postsService.deletePosts(id).subscribe(
      (response) => {
        this.getPosts();
      },
      (error) => {
        this.loading = false;
        this.errorMessage = error;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
