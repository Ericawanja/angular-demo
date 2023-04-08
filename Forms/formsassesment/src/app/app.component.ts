import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsassesment';
  @ViewChild('form') data!:NgForm
  @ViewChild('email') email!:ElementRef
  default='advanced'
  handleSubmit(em:any){
    console.log(this.data.value)
    console.log(this.email, em.valid)
  }
}

