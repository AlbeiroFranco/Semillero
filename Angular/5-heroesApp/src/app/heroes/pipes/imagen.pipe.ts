import { Pipe, PipeTransform } from '@angular/core';
import { HeroesInterface } from '../interfaces/heroes-interface';

@Pipe({
  name: 'imagen',
  //pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(value: HeroesInterface) {

    console.log('imagen se proceso');
    

    if ( !value.id && !value.alt_img){
      return 'assets/no-image.png'
    }else if(value.alt_img){
      return value.alt_img;
    }else{
      return `assets/heroes/${value.id}.jpg`; // se espera recibir lo que se coloca en el HTML
    }

  }

}
