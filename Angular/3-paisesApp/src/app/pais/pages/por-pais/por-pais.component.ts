import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = 'Hola mundo';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { } //inyeccion

  buscar( termino: string ){
    
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe( (paises) =>{
        console.log(paises);
        this.paises = paises;   //SIEMPRE HAY QUE DEFINIR DE DONDE SE RECIBEN LOS DATOS
      }, (err)=>{
        this.hayError = true
        this.paises = []
      }) //parqa que este funcione o se dispare tiene que tener un subscribe
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    
  }

}
