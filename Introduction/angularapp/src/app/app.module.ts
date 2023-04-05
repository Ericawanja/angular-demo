import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/Footer/footer.component';
import { HeaderComponent } from 'src/Header/header.component';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { TodosComponent } from 'src/Todos/todos.component';
import { Shorten } from 'src/shorten';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    TodosComponent,
    Shorten
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
