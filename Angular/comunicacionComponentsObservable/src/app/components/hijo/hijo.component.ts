import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit, OnDestroy {

  mensaje: string = 'Mensaje!';
  nombreSuscription: Subscription = new Subscription;

  constructor( public dataService: DataService) { }

  ngOnInit(): void {
    /* this.nombreSuscription = this.dataService.nombre$
      .subscribe( res => {
        console.log('Hijo:', res);
        this.mensaje = res;
      })

    this.dataService.nombre$.emit('Hijo!') */
  }

  ngOnDestroy(): void {
    /* console.log('destoid Hijo');
    
    this.nombreSuscription.unsubscribe; */
  }

}
