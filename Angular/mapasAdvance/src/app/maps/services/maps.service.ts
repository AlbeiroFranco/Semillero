import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClient } from '../api';
import { Feature, Properties } from '../interfaces/places.interface';
import { DirectionsResponse, Route } from '../interfaces/directionsinterface';
import { type } from 'os';




@Injectable({
  providedIn: 'root'
})
export class MapsService {

  private map?: Map;
  private markers: Marker[] = []

  get isMapReady(){
    return !! this.map
  }

  constructor(private directions: DirectionsApiClient){ }

  setMap( map: Map){
    this.map = map;
  }

  flyTo( coords: LngLatLike){
    if ( !this.isMapReady ) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 14,
      center: coords
    })
  }

  createMarkers ( places: Feature[], userLocation: [number, number] ){
    
    if ( !this.map ) throw Error('mapa no inicializado');
    

    this.markers.forEach( marker => marker.remove() );
    
    const newMarkers = [];

    for ( const place of places){
      const [ lng, lat ] = place.center as [number, number];
      const popup = new Popup()
        .setHTML(`
        <h6>${place.text}</h6>
        <span>${ place.place_name}</span>
        `);
      const newMarker = new Marker()
        .setLngLat([ lng, lat ])
        .setPopup( popup )
        .addTo( this.map )

      newMarkers.push(newMarker);
    }
    
    this.markers = newMarkers;

    if ( places.length === 0 ) return;

    //Limites del mapa
    const bounds = new LngLatBounds();

    newMarkers.forEach( marker => bounds.extend( marker.getLngLat() ) );
    bounds.extend( userLocation );

    this.map.fitBounds(bounds,{
      padding: 200
    })


  }

  GetRoutePoints( start: [number, number], end: [number, number]){
    this.directions.get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`) 
      .subscribe( res => this.drawPolyLine(res.routes[0]) );
      
  }

  private drawPolyLine( route: Route ){

    console.log({ kms: route.distance / 1000, duracion: route.duration / 60});

    if ( !this.map ) throw Error ('Mapa no icicializado');

    const coords = route.geometry.coordinates;
    const bounds = new LngLatBounds();
    coords.forEach( ([ lng, lat ]) => {
      bounds.extend([ lng, lat ] );
    })

    this.map?.fitBounds(bounds, {
      padding: 200
    })

    //PolyLine
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
              geometry: {
                type: 'LineString',
                coordinates: coords
              }
            }
        ]
      }

    }

    if ( this.map.getLayer('RouteString')){
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }


    this.map.addSource('RouteString', sourceData);

    this.map.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint:{
        'line-color': 'green',
        'line-width': 3
      }
    });

  }
  


}
