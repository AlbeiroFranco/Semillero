import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [ //Son los componentes que vamos a usar dentro de ese modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //que cosas quiero que sean visibles
        ListadoComponent,
        
    ],
    imports:[ //solo van Modulos OJO
        CommonModule
    ]

})


export class HeroesModule {

}