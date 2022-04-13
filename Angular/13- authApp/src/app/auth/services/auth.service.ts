import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/auth.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.dbUrl;
  private _usuario!: Usuario;

  get usuario(){
    return {...this._usuario}; // por temas de seguridad
  }

  constructor( private http: HttpClient) { }

  registro( name: string, email: string, password: string){
    const url = `${this._baseUrl}/auth/new`;
    const body = {name, email, password};

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( ({ ok, token }) => {
        if( ok === true){
          localStorage.setItem('token', token!);
        }
      }),
      map( res => res.ok ),
      catchError( err => of( err.error.msg ) )
    )
  }

  login( email: string, password: string){
    
    const url = `${this._baseUrl}/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap( res => {
        if(res.ok === true){
          localStorage.setItem('token', res.token!)
        }
        
      }),
      map( res => res.ok ),
      catchError( err => of( err.error.msg ) )
    )
  }

  validarToken(): Observable<boolean>{

    const url =`${this._baseUrl}/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>( url, { headers })
            .pipe(
              map( res => {
                console.log(res.token);
                
                localStorage.setItem('token', res.token!)
                this._usuario = {
                  name: res.name!,
                  uid: res.uid!,
                  email: res.email!
                }
                return res.ok
              }),
              catchError(err => of(false))
            )
  }

  logout(){
    localStorage.clear();
  }

}
