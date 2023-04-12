import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { TransformResponse } from './responseTransform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPostsComponent,
    TransformResponse
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
