import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
@ViewChild('title') title!:ElementRef
}
