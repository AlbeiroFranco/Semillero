import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { HeroesInterface } from '../../interfaces/heroes-interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: HeroesInterface;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    /* this.activatedRoute.params
      .subscribe(params => {
        console.log(params['id']);
      }) */ // forma Nomal 

    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesService.getHeroeporId( id )),
        tap(console.log)
        )
      .subscribe(  heroe => this.heroe = heroe); 
  }

  regresar(){
    this.router.navigate(['/heroes/listado'])  // para navegar a otras paginas
  }

}
