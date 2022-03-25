import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HeroesInterface } from '../interfaces/heroes-interface';
import { environment } from '../../../environments/environment'; // no usar el de produccion, usar el normal

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private apiEndPoint: string = environment.apiEndPoint;

  constructor( private http: HttpClient) { }

  getHeroes( ):Observable<HeroesInterface[]>{
    return this.http.get<HeroesInterface[]>(`${this.apiEndPoint}/heroes`); // obtiene los datos de la base de datos
  }

  getHeroeporId( id: string):Observable<HeroesInterface>{// trae el id de heroes
    return this.http.get<HeroesInterface>(`${this.apiEndPoint}/heroes/${id}`); // siempre que se reciba informacion en el http es una interpolacion
  }

  getSugerencia(termino: string):Observable<HeroesInterface[]>{
    return this.http.get<HeroesInterface[]>(`${this.apiEndPoint}/heroes?q=${termino}&_limit=5`) // trae la sugerencia de las palabras
  }

  postHeroe( heroe: HeroesInterface):Observable<HeroesInterface> {
    return this.http.post<HeroesInterface>(`${this.apiEndPoint}/heroes`, heroe) //publica en la base de datos -- 
  }

  putHeroe( heroe: HeroesInterface):Observable<HeroesInterface> {
    return this.http.put<HeroesInterface>(`${this.apiEndPoint}/heroes/${heroe.id}`, heroe) //actuliza en la base de datos
  }

  deleteHeroe( id: string ):Observable<any> {
    return this.http.delete<any>(`${this.apiEndPoint}/heroes/${id}`,) //Elimina en la base de datos
  }

}
