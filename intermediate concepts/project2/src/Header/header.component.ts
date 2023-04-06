import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewChildren } from "@angular/core";
import { Todo } from "src/interfaces";

@Component  ({
    selector:"header",
    templateUrl:"header.component.html",
    styleUrls:["header.component.css"]
})

export class HeaderComponent implements OnInit, OnChanges{
    componentName = 'Header'
   @Input() message!:string
   @ViewChildren('child') header!: ElementRef
   @ViewChild('TemplateRef') template
  
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
      constructor(){

      }
      ngOnInit(): void {
          console.log('The on it hook running')
          console.log(this.template)
      }
      ngOnChanges(changes: SimpleChanges): void {
          console.log("the onchange method runnin")
          console.log(changes)
      }
      ngDoCheck(){
        console.log('ngDocheck called')
      }
      ngAfterContentInit(){
        console.log(" ngAfterContentInit The content has been initialized")

      }
      ngAfterContentChecked(){
        console.log(" ngAfterContentChecked The content has been checked")
      }
      ngAfterViewInit(){
        console.log(this.header)

      }

}