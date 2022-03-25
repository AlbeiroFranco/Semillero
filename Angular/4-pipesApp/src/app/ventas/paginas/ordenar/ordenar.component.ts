import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = true; 
  ordenarPor: string = '';
 
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Joker',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Gatuela',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  cambiar(){
    this.enMayusculas = !this.enMayusculas
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
