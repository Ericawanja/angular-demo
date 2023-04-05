import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Todo } from 'src/interfaces';

@Component({
  selector: 'todos-component',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class TodosComponent {
  @Input() todo!: Todo;
  @ViewChild('input')  inputText!:ElementRef

  @Output() updateText:EventEmitter<string> = new EventEmitter();

  update(){
    this.updateText.emit("Erica Wanja")

    console.log(this.inputText.nativeElement);
    
  }
}
