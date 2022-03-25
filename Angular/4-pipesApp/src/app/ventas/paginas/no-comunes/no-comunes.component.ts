import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Albeiro';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'inviarlo',
    'femenino': 'invitarla'
  }

  cambiarPersona(){
    this.nombre = 'Diana';
    this.genero = 'femenino';
  }

  //i18nplural
  clientes: string[] = ['Jose', 'Diana', 'Camila', 'Albeiro'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando'
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //KeyValue
  persona = {
    nombre:'Jose',
    edad: 30,
    direccion: 'Colombia, Bogota'
  }

  //JsonPipe
  heroes = [
    {
      nombre : 'Superman',
      vuela: 'true',
    },
    {
      nombre : 'Batman',
      vuela: 'true',
    },
    {
      nombre : 'Joker',
      vuela: 'false',
    }
  ]

  //Async Pipe
  miObservable = interval(1000); //0.1.2.3.4.....
  valorPromesa = new Promise (( resolve, reject)=>{
    setTimeout(()=>{
      resolve('Fin de la promesa!')
    }, 3500);
  })
  
}
