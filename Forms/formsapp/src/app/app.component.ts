import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupform!: NgForm;
  title = 'formsapp';
  onSubmit(form: NgForm) {
    console.log('the form has been submitted', form);
  }
  onSubmitWithChildren() {
    console.log('The form has been submitted')
    console.log(this.signupform);
  }
}
