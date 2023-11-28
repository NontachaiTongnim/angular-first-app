// employee.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = '../app/insert/employee.json'; // Update with your API endpoint


  constructor(private http: HttpClient) { }

  sendData(data: any): Observable<any> {
    const url = 'http://localhost:4200/gettingdata'; // Replace with your server endpoint
    return this.http.post(url, data);
  }
}
