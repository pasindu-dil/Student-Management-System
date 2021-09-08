import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ClassesComponent } from './component/classes/classes.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MarksComponent } from './component/marks/marks.component';
import { StudentsComponent } from './component/students/students.component';
import { SubjectsComponent } from './component/subjects/subjects.component';
import { TeachersComponent } from './component/teachers/teachers.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'students', component: StudentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'classes', component: ClassesComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'marks', component: MarksComponent},
  {path: 'addnewstudent', component: AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
