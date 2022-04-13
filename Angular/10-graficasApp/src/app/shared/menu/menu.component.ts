import { Component,} from '@angular/core';

interface MenuItem{
  ruta: string;
  nombre: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menuItems: MenuItem[] = [ // crear un arreglo
   {
     ruta: './graficas/barras',
     nombre: 'Barras'
   },
   {
     ruta: './graficas/barras-doble',
     nombre: 'Barras Dobles'
   },
   {
     ruta: './graficas/dona',
     nombre: 'Dona'
   },
   {
     ruta: './graficas/dona-http',
     nombre: 'Dona Http'
   }
  ]

}
