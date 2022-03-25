import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { HeroesInterface } from '../../interfaces/heroes-interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  verHeroes: HeroesInterface[] = [];

  heroeSeleccionado: HeroesInterface | undefined;
  

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesService.getSugerencia( this.termino.trim())
      .subscribe( heroes => this.verHeroes = heroes)
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent){
    
    if(!event.option.value){
      this.heroeSeleccionado = undefined
      return;
    };
    

    const buscarHeroe: HeroesInterface = event.option.value
    this.termino = buscarHeroe.superhero
    
    this.heroesService.getHeroeporId( buscarHeroe.id! )
      .subscribe( heroeSeleccionado => this.heroeSeleccionado = heroeSeleccionado )      
  }

}
