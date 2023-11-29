import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { InsertComponent } from './insert/insert.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { StyleBindingComponent } from './style-binding/style-binding.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,FormsModule, NgbAlert, RouterLink, RouterLinkActive,
      HttpClientModule, ReactiveFormsModule,FormsModule, ActionBarComponent, InsertComponent,
      EditComponent, ListComponent, AboutComponent,StyleBindingComponent],
      providers: [EmployeeService],
})
export class AppComponent {

  title = 'first-app';
  // value = 0;

constructor(private router: Router) { }
  // cal(value: string){
  //   const buffet = Number(value)
  //   this.value = buffet*3/4
  // }
  // testNumberChange(value: number){
  //   console.log("test:", value);
  //  }

    gotoInsert() {
    this.router.navigate(['/insert']);
  }
  gotoActionBar() {
    this.router.navigate(['/action-bar']);
  }
  gotoStyleBinding() {
    this.router.navigate(['/style-binding']);
  }


}
