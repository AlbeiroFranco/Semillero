import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './ventas/paginas/basicos/basicos.component';
import { NumerosComponent } from './ventas/paginas/numeros/numeros.component';
import { NoComunesComponent } from './ventas/paginas/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/paginas/ordenar/ordenar.component';

const routes: Routes = [
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
