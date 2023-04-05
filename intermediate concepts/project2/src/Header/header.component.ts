import { Component } from "@angular/core";
import { Todo } from "src/interfaces";

@Component({
    selector:"header",
    templateUrl:"header.component.html",
    styleUrls:["header.component.css"]
})

export class HeaderComponent{
    componentName = 'Header'
    todos :Todo[]= [
        {
          id: 1,
          todo: 'Do something nice for someone I care about',
          completed: true,
          userId: 26,
        },
        {
          id: 2,
          todo: 'Memorize the fifty states and their capitals',
          completed: false,
          userId: 48,
        },
        { id: 3, todo: 'Watch a classic movie', completed: false, userId: 4 },
        {
          id: 4,
          todo: 'Contribute code or a monetary donation to an open-source software project',
          completed: false,
          userId: 48,
        },
        { id: 5, todo: "Solve a Rubik's cube", completed: false, userId: 31 },
        {
          id: 6,
          todo: 'Bake pastries for me and neighbor',
          completed: false,
          userId: 39,
        },
        {
          id: 7,
          todo: 'Go see a Broadway production',
          completed: false,
          userId: 32,
        },
        {
          id: 8,
          todo: 'Write a thank you letter to an influential person in my life',
          completed: true,
          userId: 13,
        },
      ];

}