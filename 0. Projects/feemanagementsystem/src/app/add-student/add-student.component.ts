import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentsService } from 'src/services/studentsFees';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent {
  @ViewChild('studentRegistrationform') formData!: NgForm;
  constructor(private studentService: StudentsService) {}
  genders: string[] = ['male', 'female'];
  handleSubmit(): void {
    console.group(this.formData.value);
    let id: string = Math.floor(Math.random() * 2).toString();
    this.studentService.addStudents({ ...this.formData.value, id, paid: 0 });
  }
}
