import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/services/posts.service';
import { TransformResponse } from './responseTransform.pipe';
import { NgForm, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransformResponse, DatePipe],
})
export class AppComponent implements OnInit {
  title = 'postsApp';
  loading: boolean = false;
  errorMessage: any;
  posts: any;
  @ViewChild('postForm') form!:NgForm

  constructor(
    private postsService: PostService,
    private formatData: TransformResponse,
    private date :DatePipe
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
  handlePostSubmit(){
    let date = this.date.transform(new Date(), 'mediumDate')
    let id= Math.floor(Math.random() * 100)
    let title =this.form.value
    this.postsService.postData({id, date, ...title}).subscribe(
      (res)=>{
        this.getPosts()
      },
      (error)=>{},
      ()=>{}
    )
  }
}
