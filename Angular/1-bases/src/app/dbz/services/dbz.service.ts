import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() // El service se distingue por tiene un decorador de tipo @INJECTABLE

export class DbzService { // export si la voy a usar fuera

    private _personajes: Personaje[] = [{//array[]
        nombre: 'Goku',
        poder: 15000
      },
      {
        nombre: 'Vegeta',
        poder: 7500
      }
      ] 

    get personajes(){
        return [...this._personajes];
    }
    constructor(){
       
    }

    agregarPersonaje ( personaje: Personaje){
        this._personajes.push( personaje )
    }
        
}