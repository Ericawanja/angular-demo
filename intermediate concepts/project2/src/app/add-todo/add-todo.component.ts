import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { TodosService } from 'src/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
  
})
export class AddTodoComponent {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('subtask') subtask!: ElementRef;

  constructor(private todoservice: TodosService) {}
  AddTodo() {
    
    this.todoservice.addTodo({
      todo: this.title.nativeElement.value as string,
      id: 1,
      completed: false,
      userId: 2,
    });
  }
}
