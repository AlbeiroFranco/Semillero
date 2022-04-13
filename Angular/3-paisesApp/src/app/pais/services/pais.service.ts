import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interfaces';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrl2 : string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams()
      .set('fields', 'name,cca2,ccn3,capital,region,flags,population,translations')
  }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string): Observable<Country[]> {
    const url = `${this.apiUrl }/name/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams});
  }

  buscarCapital( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${termino}`
    return this.http.get<Country[]>(url, { params : this.httpParams})
  }

  /* buscarRegion( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrl2}/regionalbloc/${termino}`
    return this.http.get<Country[]>(url)
  } */

  buscarRegion( region: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url, { params : this.httpParams} )
      .pipe(
        tap(console.log)
      )
  }

  traerPaisPorId ( id: string ): Observable<Country>{
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url, { params : this.httpParams})
  }

}
