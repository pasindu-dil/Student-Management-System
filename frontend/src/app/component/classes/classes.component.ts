import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  title = 'Classes';
  data = false;

  constructor() { }

  ngOnInit(): void {
  }

}
