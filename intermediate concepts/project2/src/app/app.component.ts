import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  message = "the input message from the app"
  ChangeMessage(){
    this.message = "new message"
  }
}
