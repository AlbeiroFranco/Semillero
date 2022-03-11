import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = 'Capitales';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  buscar( termino: string ){

    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    
    this.paisService.buscarCapital( this.termino )
      .subscribe((paises) =>{
        this.paises = paises;
      },(err)=>{
        this.hayError = true
        this.paises = []
      })

  }

  placeHolder(){
    
  }
 
}
