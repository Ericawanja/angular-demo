import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path:'',
    component:DisplayStudentsComponent
  },
  {
    path:'addStudent',
    component:AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
