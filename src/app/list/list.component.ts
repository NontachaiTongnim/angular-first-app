import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../insert/employee.json';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  employee: any = (data as any).default;
}
