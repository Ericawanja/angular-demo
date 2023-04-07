import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Todo } from 'src/interfaces';
import { LoggingService } from 'src/services/logger.service';
import { TodosService } from 'src/services/todo.service';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [LoggingService],
})
export class HeaderComponent implements OnInit, OnChanges {
  componentName = 'Header';
  @Input() message!: string;
  @ViewChildren('child') header!: ElementRef;
  todos!: Todo[];

  constructor(
    private loggingService: LoggingService,
    private todoService: TodosService
  ) {}
  ngOnInit(): void {
    // console.log('The on it hook running')
    // this.loggingService.logStatus("THE MESSAGE")
    this.todos = this.todoService.getTodo()
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('the onchange method runnin');
    console.log(changes);
  }
  ngDoCheck() {
    console.log('ngDocheck called');
  }
  ngAfterContentInit() {
    console.log(' ngAfterContentInit The content has been initialized');
  }
  ngAfterContentChecked() {
    console.log(' ngAfterContentChecked The content has been checked');
  }
  ngAfterViewInit() {
    console.log(this.header);
  }
}
