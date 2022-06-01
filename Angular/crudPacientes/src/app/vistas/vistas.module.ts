import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlantillasModule } from '../plantillas/plantillas.module';



@NgModule({
  declarations: [
    DashboardComponent,
    EditComponent,
    LoginComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PlantillasModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    EditComponent,
    LoginComponent,
    NewComponent
  ]
 
})
export class VistasModule { }
