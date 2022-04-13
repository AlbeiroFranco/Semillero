import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaisSmall } from '../interfaces/paises.interface';
import { Observable, of } from 'rxjs';
import { combineLatest } from 'rxjs/internal/observable/combineLatest';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private _baseUrl: string = 'https://restcountries.com/v3.1'
  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']; // el guion bajo es pra definir clases privadas

  get regiones():string[] {
    return [...this._regiones]; //desestructurarlo
  }

  constructor( private http: HttpClient) { }

  getPaisesRegion( region: string ):Observable<PaisSmall[]>{
    const url: string = `${this._baseUrl}/region/${region}?fields=name,cca2`
    return this.http.get<PaisSmall[]>(url)
  }

  getCode( code: string):Observable<PaisSmall | null> {

    if(!code){ // condicion si no trae el codigo
      return of (null)
    }
    const url: string = `${this._baseUrl}/alpha/${code}?fields=name,cca2,borders`
    return this.http.get<PaisSmall>(url)
    
  }

  getCodeSmall( code: string):Observable<PaisSmall> {

    const url: string = `${this._baseUrl}/alpha/${code}?fields=name,cca2`
    return this.http.get<PaisSmall>(url)
    
  }

  getPaisesCode ( borders: string[]):Observable<PaisSmall[]> {
    if(!borders){
      return of ([])
    }

    const peticiones: Observable<PaisSmall>[] = []

    borders.forEach( code =>{
      const peticion = this.getCodeSmall(code);
      peticiones.push( peticion )
    } )

    return combineLatest( peticiones)

  }


}
