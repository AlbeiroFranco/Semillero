import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})

export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //@ViewChild() es como el querySelector el tipo de elemento se puede ver cuando se visualiza la informacion en la consola
  //! = not null assetion operator se asegura que el objeto no es nulo ---- le estamos informando a TypeScrip que este elemento si existe
  
  constructor ( private gifsServices: GifsService ){} //Inyectar el servicio private "nombre del servicio" + servicio

  buscar(){

    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length === 0){
      return;
    }
    
    this.gifsServices.buscarGifs( valor ); // se trae el metodo del servicio

    this.txtBuscar.nativeElement.value = '';

  }



}
