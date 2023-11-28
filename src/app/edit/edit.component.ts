import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../insert/employee.json';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
 employee: any = (data as any).default;
}
