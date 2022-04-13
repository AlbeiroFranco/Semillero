import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

interface colorMarcador{
  color: string;
  marker?: mapboxgl.Marker;
  centro?: [number, number]
}

@Component({
  selector: 'app-marcadores',
  templateUrl: './marcadores.component.html',
  styleUrls: ['./marcadores.component.css']
})
export class MarcadoresComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;  
  mapa!: mapboxgl.Map;
  zoomLvl: number = 15
  centroMap: [number, number] = [ -74.09300073060592, 4.7203637596781505 ];

  // Arreglo de marcadores
  marcadores: colorMarcador[] = []

  constructor() { }
  
  ngAfterViewInit(): void {
    
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement, // native element se trae para usar el ElementRef
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.centroMap ,
      zoom: this.zoomLvl
    });

    this.leerLocalStorage();

    /* const markerHtml: HTMLElement = document.createElement('div');
    markerHtml.innerHTML = 'aca vivo yo'
    const marker = new mapboxgl.Marker({
      element: markerHtml
    }) */ //esto sirve para crear un elemento y e insertar un marcador personalizado

    /* const marker = new mapboxgl.Marker()
      .setLngLat ( this.centroMap ) 
      .addTo( this.mapa) */ // este es el marcador de mapbox predeterminado

    


  }

  agregarMarcador(){

    const color = `#${crypto.getRandomValues(new Uint32Array(1))[0].toString(16).padStart(8, '0').slice(-6)}`

    const nuevoMarcador = new mapboxgl.Marker({
      draggable: true,
      color
    })
      .setLngLat( this.centroMap )
      .addTo( this.mapa)
    
    this.marcadores.push({
      color,
      marker: nuevoMarcador
    } );

    console.log(this.marcadores);
    this.guardarMarcadoresLocalStorage()

    nuevoMarcador.on('dragend', () => {// le esta diciendo que apenas seleccione y mueva el mouse se guarde la posicion
      /* console.log('drag'); */
      this.guardarMarcadoresLocalStorage();
    }) 
    

  }

  irMarcador( marker: mapboxgl.Marker){
    /* console.log(marker); */
    
    this.mapa.flyTo({
      center: marker.getLngLat()
    })
  }

  guardarMarcadoresLocalStorage(){

    const lngLatArr: colorMarcador[] = []

    this.marcadores.forEach( m => {
      
      const color = m.color;
      const {lng, lat} = m.marker!.getLngLat();

      lngLatArr.push({
        color: color,
        centro: [ lng, lat]
      });

    })

    localStorage.setItem('marcadores', JSON.stringify(lngLatArr))

  }

  leerLocalStorage(){
    if( !localStorage.getItem('marcadores')){
      return;
    }
    const lngLatArr: colorMarcador[] = JSON.parse(localStorage.getItem('marcadores')! );

    lngLatArr.forEach( m =>{

      const newMarker = new mapboxgl.Marker({
        color: m.color,
        draggable: true
      })
        .setLngLat(m.centro!)
        .addTo(this.mapa)

      this.marcadores.push({
        marker: newMarker,
        color: m.color
      });

      newMarker.on('dragend', () => {
        /* console.log('drag') */
        this.guardarMarcadoresLocalStorage();
      })

    })

  }

  borrarMarcador( i:number ){
    /* console.log('Borrado'); */
    this.marcadores[i].marker?.remove();
    this.marcadores.splice( i, 1 );
    this.guardarMarcadoresLocalStorage();
  }

 
}

/* ? el valor es opcional */
/* ! confia en mi que siempre vamos a tener un valor aca */
