import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { StudentsComponent } from './component/students/students.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TeachersComponent } from './component/teachers/teachers.component';
import { ClassesComponent } from './component/classes/classes.component';
import { SubjectsComponent } from './component/subjects/subjects.component';
import { MarksComponent } from './component/marks/marks.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    StudentsComponent,
    TeachersComponent,
    ClassesComponent,
    SubjectsComponent,
    MarksComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
