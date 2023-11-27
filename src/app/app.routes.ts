import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { InsertComponent } from './insert/insert.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { AboutComponent } from './about/about.component';
import { ActionBarComponent } from './action-bar/action-bar.component';




export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'insert', component: InsertComponent},
  { path: 'list', component: ListComponent},
  { path: 'edit', component: EditComponent},
  { path: 'about', component: AboutComponent},
  { path: 'action-bar', component: ActionBarComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
