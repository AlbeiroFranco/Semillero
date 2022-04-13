import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombres',
  templateUrl: './muestra-nombres.component.html',
  styleUrls: ['./muestra-nombres.component.css']
})
export class MuestraNombresComponent implements OnInit, OnChanges {

  @Input () nombre!: string;// recibe un argumento "nombre"

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

  ngOnInit(): void {
  }

}
