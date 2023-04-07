import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/Header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodosService } from 'src/services/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
