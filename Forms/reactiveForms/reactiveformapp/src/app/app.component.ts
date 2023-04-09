import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'reactiveformapp';
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(null , [Validators.required, Validators.email]),
      message: new FormControl(null, Validators.required),
    });
  }
  onSubmit(){
    console.log(this.myForm)
  }
}
