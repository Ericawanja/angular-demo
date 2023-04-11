import { Injectable } from '@angular/core';
import { Istudent } from 'src/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private students: Istudent[] = [
    {
      name: 'Erica wanja',
      id: '2',
      paid: 1234,
      gender: 'female',
    },
    {
      name: 'John Doe',
      id: '3',
      paid: 1234,
      gender: 'female',
    },
    {
      name: 'Jane Doe',
      id: '4',
      paid: 1234,
      gender: 'female',
    },
  ];
  constructor() {}

  getStudents() {
    return this.students;
  }
  addStudents(student: Istudent) {
    console.log(student);
    this.students.push(student)
  }
}
