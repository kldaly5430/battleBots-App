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

@NgModule({
  declarations: [
    AppComponent,
    RobotListComponent,
    RobotItemComponent,
    RobotEditComponent
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
