import { Injectable } from "@angular/core";
import { Istudent } from "src/interfaces";

@Injectable({
    providedIn:'root'
})
export class StudentsService{
   private students: Istudent[] = [
        {
          name: 'Erica wanja',
          id: '2',
          paid: 1234,
        },
        {
          name: 'John Doe',
          id: '3',
          paid: 1234,
        },
        {
          name: 'Jane Doe',
          id: '4',
          paid: 1234,
        },
      ];
    constructor(){

    }

    getStudents(){
        return this.students

    }
}