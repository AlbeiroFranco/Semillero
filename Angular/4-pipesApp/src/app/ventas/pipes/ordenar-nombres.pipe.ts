import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenarNombres'
})
export class OrdenarNombresPipe implements PipeTransform {

  transform(value: Heroe[], ordenarPor: string = 'sin valor'): Heroe[] {

    switch (ordenarPor) {
      case 'nombre':
        return value = value.sort ( (a,b)=> (a.nombre > b.nombre) ? 1 : -1);
      
      case 'vuela':
        return value = value.sort ( (a,b)=> (a.vuela > b.vuela) ? -1 : 1);

      case 'color':
        return value = value.sort ( (a,b)=> (a.color > b.color) ? 1 : -1);
    
      default:
        return value;
        
    }
    
    
    /* if( ordenarPor === 'sin valor'){
      return value
    }else{
      value = value.sort ( (a,b)=> (a.nombre > b.nombre) ? 1 : -1)
    }
    return value;*/
  } 

}
