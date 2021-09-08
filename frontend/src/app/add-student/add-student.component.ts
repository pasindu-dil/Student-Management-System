import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Students } from '../students';
import { StudentserviceService } from '../studentservice.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  errmsg: any;
  enableerr: any = true;

  addnewForm = new FormGroup({
    nic: new FormControl(''),
    namewithinit: new FormControl(''),
    fullname: new FormControl(''),
    addressline1: new FormControl(''),
    addressline2: new FormControl(''),
    city: new FormControl(''),
    school: new FormControl(''),
    image: new FormControl('')
  });

  constructor(private stdservice: StudentserviceService, private router: Router) { }

  students!: Students[];

  ngOnInit(): void {
    this.getStudents();
  }

  saveStudent(){
    this.stdservice.createStudent(this.addnewForm.value).subscribe(data => {
      console.log(data);
      this.errmsg = true;
    }, error =>{ console.log(error); this.errmsg = false});
  }

  gotoStudent(){
    // this.router.navigate(['students']);
    // console.log(this.addnewForm.value);
  }

  onSubmit(){
    this.enableerr = true;
    this.saveStudent();
    // this.gotoStudent();
  }

  private getStudents(){
    this.stdservice.getStudent().subscribe(data => {
      this.students = data;
    });
  }

  addnewStdView(){
    const view = document.getElementById('add-new-std');
    view?.classList.add('stdView');
  }

  btnBack(){
    this.router.navigate(['students']);
  }

  btnReset(){
    this.enableerr = false;
  }

}
