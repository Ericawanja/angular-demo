import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from 'src/store/actions/counter.action';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    //connect this.count stream to the current store count state
    this.count = store.select('count');
  }
  Increment() {
    this.store.dispatch(increment());
  }
  Decrement() {
    this.store.dispatch(decrement());
  }
  Reset() {
    this.store.dispatch(reset());
  }
}
