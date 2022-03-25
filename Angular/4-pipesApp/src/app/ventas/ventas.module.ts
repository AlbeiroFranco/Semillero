import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './paginas/numeros/numeros.component';
import { NoComunesComponent } from './paginas/no-comunes/no-comunes.component';
import { BasicosComponent } from './paginas/basicos/basicos.component';
import { OrdenarComponent } from './paginas/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarNombresPipe } from './pipes/ordenar-nombres.pipe';




@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    
    MayusculasPipe,
    VuelaPipe,
    OrdenarNombresPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class VentasModule { }
