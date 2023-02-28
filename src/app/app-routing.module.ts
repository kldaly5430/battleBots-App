import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotEditComponent } from './Robots/editRobots/robot-edit.component';
import { RobotListComponent } from './Robots/listRobots/robot-list.component';

const routes: Routes = [
  { path: '', component: RobotListComponent },
  { path: 'new', component: RobotEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
