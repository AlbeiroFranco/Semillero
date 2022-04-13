import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'barras',
        component: BarrasComponent
      },
      {
        path: 'barras-doble',
        component: BarrasDobleComponent
      },
      {
        path: 'dona',
        component: DonaComponent
      },
      {
        path: 'dona-http',
        component: DonaHttpComponent
      },
      {
        path: '**',
        redirectTo: 'barras'
      }
      
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
})
export class GraficasRoutingModule { }
