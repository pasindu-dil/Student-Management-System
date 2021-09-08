import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/students';
import { StudentserviceService } from 'src/app/studentservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  title = 'Student';
  status: any = false;

  students!: Students[];

  constructor(private studentService: StudentserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudent().subscribe(data => {
      this.students = data;
    });

    this.status = true;
  }

  addnew(){
    this.router.navigate(['addnewstudent']);
  }

  public deleteStudent(){
    this.studentService.deleteStudent().subscribe(data =>{
      console.log('Deleted' + data);
    })
  }

}
