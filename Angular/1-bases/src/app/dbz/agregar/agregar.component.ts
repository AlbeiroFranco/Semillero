import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})


export class AgregarComponent  {

  /* @Input() personajes: Personaje[] = [] */

  @Input() nuevo: Personaje = { //objeto{}
    nombre:'',
    poder: 0
  }

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */ //Sirve para emitir eventos <tipoDeDatoQueDeseaEvniar>
  constructor( private dbzService: DbzService){

  }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.dbzService.agregarPersonaje( this.nuevo)

    /* console.log(this.nuevo); */
    /* this.onNuevoPersonaje.emit(this.nuevo); */

    /* this.personajes.push(this.nuevo);  */// this.nuevo a donde insertar
    this.nuevo = { nombre: '', poder: 0}; //limpiar de nuevo 

    
    /* console.log(this.personajes); */
  }

  
  
}
