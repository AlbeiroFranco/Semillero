import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {

  constructor( private gifsService: GifsService) { } // Inyectar el servicio
  
  get historial(){
    return this.gifsService.historial;
  }

  buscar( termino: string){
    
    this.gifsService.buscarGifs( termino ); // se dificulto
    
  }

}
