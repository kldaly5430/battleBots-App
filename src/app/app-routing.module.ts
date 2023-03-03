import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BattleListComponent } from './Battle/battle-list/battle-list.component';
import { BattlelogsComponent } from './Battle/battlelogs/battlelogs.component';
import { DetailsRobotComponent } from './Robots/details-robot/details-robot.component';
import { RobotEditComponent } from './Robots/editRobots/robot-edit.component';
import { RobotListComponent } from './Robots/listRobots/robot-list.component';

const routes: Routes = [
  { path: '', component: RobotListComponent },
  { path: 'new', component: RobotEditComponent },
  { path: 'battlelist', component: BattleListComponent },
  { path: 'battlelog', component: BattlelogsComponent },
  { path: ':id', component: DetailsRobotComponent },
  { path: ':id/edit', component: RobotEditComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
