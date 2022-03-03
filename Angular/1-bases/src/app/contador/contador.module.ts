import { NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule {}