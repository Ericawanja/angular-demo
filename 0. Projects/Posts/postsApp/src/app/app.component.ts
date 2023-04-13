import { Component, OnInit, ViewChild } from '@angular/core';
import { PostService } from 'src/services/posts.service';
import { TransformResponse } from './responseTransform.pipe';
import { NgForm, NgModel } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Ipost } from 'src/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TransformResponse, DatePipe],
})
export class AppComponent implements OnInit {
  title = 'postsApp';
  editing = false;
  loading: boolean = false;
  errorMessage: any;
  posts: any;
  temp!: Ipost;
  tempValue: string = '';
  @ViewChild('postForm') form!: NgForm;

  constructor(
    private postsService: PostService,
    private formatData: TransformResponse,
    private date: DatePipe
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
  handlePostSubmit() {
    if (!this.editing) {
      let date = this.date.transform(new Date(), 'mediumDate');
      let id = Math.floor(Math.random() * 100);
      let title = this.form.value;
      this.tempValue =" "
      this.postsService.postData({ id, date, ...title }).subscribe(
        (res) => {
          
          this.getPosts();
        },
        (error) => {},
        () => {}
      );
    } else {
      let data:Ipost = {...this.temp, title:this.form.value.title }
      this.postsService.editPost(data).subscribe(
        (res) => {
          this.getPosts();
          this.editing= false
          this.tempValue =''
          
        },
        (error) => {},
        () => {}
      );
    }
  }
  handleEdit(post: Ipost) {
    this.temp = post;
    this.editing = true;
    this.tempValue = post.title;
  }
}
