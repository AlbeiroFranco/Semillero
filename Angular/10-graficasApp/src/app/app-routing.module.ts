import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'graficas', // este nombres del path que se usa para acceder a las paginas OJO ./graficas/barras no tiene que ingresar a la carpeta pages
    loadChildren: () => import('./graficas/graficas.module').then( m => m.GraficasModule)
  },
  {
    path: '**',
    redirectTo: 'graficas'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
