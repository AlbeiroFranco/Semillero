import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokerGuard } from './guards/validar-toker.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then (m => m.AuthModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>  import('./protected/protected.module').then (  m => m.ProtectedModule),
    canActivate: [ ValidarTokerGuard ],
    canLoad: [ ValidarTokerGuard]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
