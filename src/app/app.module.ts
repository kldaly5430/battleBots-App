import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RobotListComponent } from './Robots/listRobots/robot-list.component';
import { RobotItemComponent } from './Robots/listRobots/robot-item/robot-item.component';
import { RobotEditComponent } from './Robots/editRobots/robot-edit.component';
import { DetailsRobotComponent } from './Robots/details-robot/details-robot.component';
import { HeaderComponent } from './Header/header/header.component';
import { BattleListComponent } from './Battle/battle-list/battle-list.component';
import { BattlelogsComponent } from './Battle/battlelogs/battlelogs.component';

@NgModule({
  declarations: [
    AppComponent,
    RobotListComponent,
    RobotItemComponent,
    RobotEditComponent,
    DetailsRobotComponent,
    HeaderComponent,
    BattleListComponent,
    BattlelogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
