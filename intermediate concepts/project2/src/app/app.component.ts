import { Component } from '@angular/core';
import { TodosService } from 'src/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'project2';
  message = "the input message from the app"
  ChangeMessage(){
    this.message = "new message"
  }
}
