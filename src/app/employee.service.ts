import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = '../app/insert/employee.json'; // Update with your JSON file path

  constructor(private http: HttpClient) {}

  // Read data from JSON file
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Write data to JSON file (assuming you have a server-side endpoint to handle the update)
  updateData(updatedData: any): Observable<any> {
    return this.http.put(this.apiUrl, updatedData);
  }

  // Add new data to JSON file (assuming you have a server-side endpoint to handle the addition)
  addData(newData: any): Observable<any> {
  const headers = { 'Content-Type': 'application/json' };
  return this.http.post(this.apiUrl, newData, { headers });
}
}
