import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl' //importar librerias de JS



@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var map = new mapboxgl.Map({
    container: 'mapa',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ -74.09300073060592 , 4.7203637596781505 ],
    zoom: 18
    });
  }

}
