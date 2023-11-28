import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-action.component.html',
  styleUrl: './add-action.component.css'
})
export class AddActionComponent {

constructor(private dataService: EmployeeService) {}

}
