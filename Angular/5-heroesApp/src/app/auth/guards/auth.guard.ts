import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor( 
    private authService: AuthService,
    private router: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
      return this.authService.VerificarAutenticacion()
        .pipe(
          tap( estaAutenticado => {
            if( !estaAutenticado ){
              this.router.navigate(['./auth/login'])
            }
          })
        )
      /* if(this.authService.verAuth.id){
        return true;
      }
      
      console.log('bloqueado por Guard CanActivate');
      return false; */
  }
  canLoad( // evita que el usuario cargue el modulo
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {

      return this.authService.VerificarAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado ){
            this.router.navigate(['./auth/login'])
          }
        })
      );
      /* console.log('canLoad', false);
      console.log(route);
      console.log(segments); */
     /*  if(this.authService.verAuth.id){
        return true;
      }
      
      console.log('bloqueado por Guard - canLoad');
      return false; */
  }
}
