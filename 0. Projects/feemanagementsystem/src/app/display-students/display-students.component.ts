import { Component, OnInit } from '@angular/core';
import { Istudent } from 'src/interfaces';
import { StudentsService } from 'src/services/studentsFees';

@Component({
  selector: 'app-display-students',
  templateUrl: './display-students.component.html',
  styleUrls: ['./display-students.component.css'],
})
export class DisplayStudentsComponent implements OnInit {
  students!:Istudent[]
  constructor(private studentsService:StudentsService){}
  ngOnInit(): void {
    this.students= this.studentsService.getStudents()
  }
}
