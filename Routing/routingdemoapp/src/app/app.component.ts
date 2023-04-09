import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingdemoapp';
  constructor(private router:Router){}
  loadProductsPage():void{
this.router.navigate(['products'])
  }
}
