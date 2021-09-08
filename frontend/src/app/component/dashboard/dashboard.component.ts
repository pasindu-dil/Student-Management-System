import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Students } from 'src/app/students';
import { StudentserviceService } from 'src/app/studentservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // [x: string]: any;

  mbImg1 = '../assets/icons8_add_user_male_64px_1.png';
  image = '../assets/comment-author-1.jpg';
  stdImage = '../assets/icons8_male_user_100px_4.png';

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
    const view = document.getElementById('add-new-std');
    view?.classList.remove('stdView');
    this.enableerr = false;
  }

  btnReset(){
    this.enableerr = false;
  }

}
