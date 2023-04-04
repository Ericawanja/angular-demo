import { Component, Input } from "@angular/core";
import { Todo } from "src/interfaces";


@Component({
    selector:'todos-component',
    templateUrl:'todos.component.html',
    styleUrls:['todos.component.css']

})

export class TodosComponent {
    @Input() todo!:Todo
    
}