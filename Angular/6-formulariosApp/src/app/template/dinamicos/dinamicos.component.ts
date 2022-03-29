import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent{

  @ViewChild('formulario') formulario!: NgForm

  nuevoJuego: string = ''
  persona: Persona ={
    nombre: 'Jose',
    favoritos: [
      {id: 1, nombre: 'Gears of war'},
      {id: 2, nombre: 'Call Of duty'},
      {id: 3, nombre: 'Forza'},

    ]
  }

  constructor() { }

  guardar(){
    console.log('sirve');
    
    
  }

  validar(){
    return this.formulario?.controls['nomPersona']?.errors 
            && this.formulario?.controls['nomPersona']?.touched; 
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1)
  }


}
