import { Component, OnInit } from '@angular/core';

interface MenuItem { // propiedad para crear el menu dimaico
  ruta: string;
  nombre: string; 
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  menuItems: MenuItem[] = [
    {
      ruta: './mapas/fullscreen',
      nombre: 'Pantalla Completa'
    },
    {
      ruta: './mapas/zoon-range',
      nombre: 'Zoom-Rango'
    },
    {
      ruta: './mapas/marcadores',
      nombre: 'Marcadores'
    },
    {
      ruta: './mapas/propiedades',
      nombre: 'Propiedades'
    },
  ];

 

}
