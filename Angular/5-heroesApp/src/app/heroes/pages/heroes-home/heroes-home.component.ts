import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';


@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container{
      margin: 10px
    }
  `]
})
export class HeroesHomeComponent  {

  get verAuth(){
    return this.authService.verAuth;
  }

  constructor( 
    private router: Router,
    private authService: AuthService
    ) { }

  salir(){

    this.router.navigate(['./auth'])

  }


}
