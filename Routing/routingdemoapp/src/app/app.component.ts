import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'routingdemoapp';
  firstSub!: Observer<any>;
  constructor(private router: Router) {}
  loadProductsPage(): void {
    this.router.navigate(['products']);
  }

  obs = new Observable((observer) => {
    let count = 0;
    setInterval(() => {
      observer.next(count);
      count++;
    }, 1000);
  });
  ngOnInit(): void {
    //custom observable
    

    this.obs.subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      },
      () => console.log('completed')
    );
  }
  ngOnDestroy(): void {
    //unsubscribe the observable
  }
}
