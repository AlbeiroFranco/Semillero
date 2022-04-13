import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styleUrls: ['./zoom-range.component.css']
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;  // toma una referencia local para utilizarla en el component y necesita yn native element
  mapa!: mapboxgl.Map;
  zoomLvl: number = 10
  centroMap: [number, number] = [ -74.09300073060592, 4.7203637596781505 ]

  constructor() { }
  
  
  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {}); // destruir el listener para que no cargue dos veces
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});
  }
 
  
  
  ngAfterViewInit(): void {

/*     console.log('AfterViewInit', this.divMapa); */

  this.mapa = new mapboxgl.Map({
    container: this.divMapa.nativeElement, // native element se trae para usar el ElementRef
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.centroMap ,
    zoom: this.zoomLvl
  });

   //zoom de la pripiedad de map - mapbox
  this.mapa.on('zoom', (event) => { // "on" para crear un listenner
    /* const zoomAct = this.mapa.getZoom();
    console.log(zoomAct); */
  this.zoomLvl = this.mapa.getZoom();
    
  });
  
  //zoomend de la pripiedad de map - mapbox
  this.mapa.on('zoomend', (event) => {
   if(this.mapa.getZoom() > 18){
     this.mapa.zoomTo(18);
   }
  })
  //Movimiento del mapa
  this.mapa.on('move', (event)=>{
    /* console.log(event); */
    const target = event.target;
    const { lng, lat } = target.getCenter();
    this.centroMap = [lng, lat];
    
    
  })
  }

  zoomOut(){
    this.mapa.zoomOut(); 
  }
  zoomIn(){
    this.mapa.zoomIn();
  }
  cambio( valor: string){
    this.mapa.zoomTo( Number(valor ))
    
  }

}
