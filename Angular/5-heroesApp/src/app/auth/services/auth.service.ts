import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiEndPoint: string = environment.apiEndPoint;
  private _auth: Auth | undefined;

  get verAuth(){
    return{...this._auth} // desestructurar para que sea un valor fijo y no se cambie de alguna manera
  }

  VerificarAutenticacion(): Observable<boolean>{  // la forma facil Observable<boolean> | boolean
    if( !localStorage.getItem('token')){
      return of(false); // para resolver el observable
    }
    return this.http.get<Auth>(`${this.apiEndPoint}/usuarios/1`)
      .pipe(
        map( res => {
          this._auth = res
          return true
        })
      )
  }

  constructor( private http: HttpClient) {}

  login(){
      return this.http.get<Auth>(`${this.apiEndPoint}/usuarios/1`)
        .pipe(
          tap( res => this._auth = res),
          tap( res => localStorage.setItem('token', res.id))

        )
    }

  logOuth(){

    this._auth = undefined;
  }
}
