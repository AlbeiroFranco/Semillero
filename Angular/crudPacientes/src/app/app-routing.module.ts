import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { LoginComponent } from './vistas/login/login.component';
import { NewComponent } from './vistas/new/new.component';
import { EditComponent } from './vistas/edit/edit.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, */
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
   path: '**',
   redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

