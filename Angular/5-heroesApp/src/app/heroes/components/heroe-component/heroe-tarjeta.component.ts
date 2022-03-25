import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesInterface } from '../../interfaces/heroes-interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent {

  @Input() heroe!: HeroesInterface; //cuando se quiere utilizar una propiedad de otro component se define aca la que se va a usar y se utiliza la del otro component

  
  }
