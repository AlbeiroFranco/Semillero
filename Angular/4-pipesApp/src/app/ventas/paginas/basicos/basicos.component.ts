import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'Jose';
  nombreUpper: string = 'JOSE';
  nombreCompleto: string =' JoSe AlBeIrO';

  fecha: Date = new Date();

}
