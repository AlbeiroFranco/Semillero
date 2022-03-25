import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs'; //recibe un Observable yenvia otro Observable
import { Country, Translation } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;
  translationsVal!: Translation[];
  

  constructor( 
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    /* this.activateRoute.params
      .subscribe( params => {
        console.log("[id]");
        
        this.activateRoute.params.subscribe (({id}) => console.log (id)) // desestructuracion 
      } ) */

    this.activateRoute.params
      .pipe(
        switchMap( ( {id} ) => this.paisService.traerPaisPorId( id )),
        tap( console.log ) // se ejecuta el console.log cuando pasar por aca y el tap se encarga de imprimir los datos aca
      )
      .subscribe ( pais => {
        this.pais = pais;
        const {translations} = pais;
            this.translationsVal =  Object.values(translations);
            /* console.log(this.translationsVal); */
        })
        

    /* this.activateRoute.params
      .subscribe( ({id}) => {
        
        this.paisService.traerPaisPorId( id )
          .subscribe ( pais => {
            console.log(pais);
            
          })
        

      } ) */

  }

}
