import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mensaje: string = 'Nabvar!';

  constructor( private dataService: DataService) { }

  ngOnInit(): void {
  
    this.dataService.nombre$
      .subscribe( res => {
        this.mensaje = res;
        console.log('Navbar:', res);
        
      })

  }

}
