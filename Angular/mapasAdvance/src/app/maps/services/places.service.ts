import { Injectable } from '@angular/core';
import { PlacesResponse, Feature } from '../interfaces/places.interface';
import { PlacesApiClient } from '../api';
import { MapsService } from './maps.service';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public useLocation?: [number, number];
  public isLoadingPlaces: boolean = false;
  public places: Feature[] = [];
  
  get isUserLocationReady(): boolean{
    return !!this.useLocation
  }

  constructor( private placesApi: PlacesApiClient, private mapService: MapsService) { 
    this.getUserLocation();
  }

  public async getUserLocation(): Promise<[number, number]>{
    
    return new Promise(( resolve, reject ) => {
      
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.useLocation = [coords.longitude, coords.latitude]
           resolve( this.useLocation )
        },
        (err) => {
          alert( err )
          console.log( err );
          reject();
        }
      );
    })
  }

  getPlacesQuery( query: string = ''){

    if ( query.length === 0){
      this.places = [];
      this.isLoadingPlaces = false;
      return;
    }

    if ( !this.useLocation ) throw Error('No hay UserLocation')

    this.isLoadingPlaces = true

    this.placesApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: this.useLocation.join(',')
      }
    })
      .subscribe( res => {
         /* console.log(res.features); */
         this.isLoadingPlaces = false;
         this.places = res.features;   
         
         this.mapService.createMarkers( this.places, this.useLocation! );
      } );
  }

  deletePlaces(){
    this.places = []
  }


}
