import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginI } from '../modelos/login.interface';
import { ResponseI } from '../modelos/response.interface';
import { map, Observable, observable } from 'rxjs';
import { ListaPacientesI } from '../modelos/listaP.interface';
import { PacienteI } from '../modelos/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://api.solodata.es/'
  
  constructor( private http: HttpClient) { }

  loginEmail( form: LoginI ):Observable<ResponseI>{
    let direccion = this.url + 'auth';
    return this.http.post<ResponseI>(direccion,form);
  }

  getPacientes(page: number):Observable<PacienteI[]>{
    let direccion = this.url + `pacientes?page=${page}`
    return this.http.get<PacienteI[]>(direccion)
    
  }
  

  singlePacientes(id: any):Observable<PacienteI>{
    let direccion = this.url + `pacientes?id=${id}`;
    return this.http.get<PacienteI>(direccion)
    .pipe(
      map((res: any) => {
        return res[0];
      })
    )
  } 

  putUser(form: PacienteI):Observable<ResponseI>{ 
    let direccion = this.url + 'pacientes';
    return this.http.put<ResponseI>(direccion, form)
  }

  deleteUser(form: PacienteI):Observable<ResponseI>{
    let direccion = this.url + 'pacientes';
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: form
    }
    return this.http.delete<ResponseI>(direccion, options);
  }

  postUser(form: PacienteI):Observable<ResponseI>{
    let direccion = this.url + 'pacientes';
    return this.http.post<ResponseI>(direccion, form);
  }


}
