import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  private baseUrl = "http://localhost:8080/api/students";

  constructor(private http : HttpClient) { }

  getStudent(): Observable<Students[]>{
    return this.http.get<Students[]>(`${this.baseUrl}`);
  }

  createStudent(student: Students): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, student);
  }

  deleteStudent(): Observable<Object>{
    return this.http.delete(`${this.baseUrl}`);
  }
}
