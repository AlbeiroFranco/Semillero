import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent {

  constructor() { }

  persona = {
    genero: 'M',
    notificaciones: true,
  }
  
  terminosCondiciones: boolean = false;
}
