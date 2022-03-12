import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // ngIf ngFor
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component'; //Inportacion de Formularios
import { DbzService } from './services/dbz.service';



@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [// todos los servicios SINGLETONES
    DbzService
  ]
})
export class DbzModule { }
