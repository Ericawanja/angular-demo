import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    //connect this.count stream to the current store count state
  }
  Increment(){

  }
  Decrement(){

  }
  Reset(){
    
  }
}
