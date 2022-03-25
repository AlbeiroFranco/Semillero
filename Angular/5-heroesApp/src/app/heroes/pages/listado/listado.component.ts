import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroesInterface } from '../../interfaces/heroes-interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  verHeroes: HeroesInterface[] = []

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe ( res => {
        /* console.log(res); */
        this.verHeroes = res;
      })
    
  }

}
