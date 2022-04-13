import { Component } from '@angular/core';
import { MapsService } from '../../services/maps.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor( private mapsService: MapsService, private placeService: PlacesService ) { }

  goToMyLocation(){

    if ( !this.placeService.isUserLocationReady ) throw Error(' No Hay ubicación para el usuario ');
    if ( !this.mapsService.isMapReady ) throw Error(' No hay mapa disponible');
    
    this.mapsService.flyTo( this.placeService.useLocation! );
    
  }


}
