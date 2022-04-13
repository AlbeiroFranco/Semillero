import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getRedes(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getDonaData(){
    return this.getRedes()
      .pipe(
        delay(1000), // para programarle un tiempo de respuesta de la grafica
        map( data => {
          const labels = Object.keys( data ); // lo convierte a utilizable saca las llaves del arreglo
          const values = Object.values( data ); // lo convierte a utilizable saca las llaves del arreglo
          
          return {labels, values}
        })
      )
  }

}
