import { Component} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises.interfaces';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  /* regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']; */
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) { } //inyectar servicio

  getClaseCss( region: string ): string{ //crear el metodo e inicializarlos desde el component
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }
  
  activarRegion( region: string){ //METODOS CREADOS === Function---- dentro d ela funcion va el argumento
    
    if (region === this.regionActiva){return;}
    
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion( region )
      .subscribe((paises)=>{
        this.paises = paises;
        /* console.log(paises); */
        
      }) 

  }
  
}
