import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insert',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})

export class InsertComponent  {
  employee: Employee = {
    firstname: '',
    lastname: '',
    phonenumber: '',
  };
  submitted = false;  // Fix: Initialize 'submitted' to false

  constructor(public employeeService: EmployeeService) {}

  saveEmployee(): void {
    const data = {
      firstname: this.employee.firstname,
      lastname: this.employee.lastname,
      phonenumber: this.employee.phonenumber,
    };

    this.employeeService.addData(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = {
      firstname: '',
      lastname: '',
      phonenumber: '',
    };
  }
}
