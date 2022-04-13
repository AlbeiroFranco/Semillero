import { Component } from '@angular/core';
import { PlacesService } from '../../services';
import { Feature } from '../../interfaces/places.interface';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent  {

  public selectedId: string = ''

  constructor( private placesService: PlacesService, private mapService: MapsService) { }

  get isLoadingPlaces(): boolean{
    return this.placesService.isLoadingPlaces;
  }

  get places(): Feature[]{
    return this.placesService.places
  }

  flyTo( place: Feature){

    this.selectedId = place.id;
    const [ lng, lat ] = place.center;
    this.mapService.flyTo([ lng, lat])
  }

  getDirections( place: Feature ){

    if ( !this.placesService.useLocation) throw Error ('No hay userLocation');

    this.placesService.deletePlaces();

    const start = this.placesService.useLocation;
    const end = place.center as [number, number];

    this.mapService.GetRoutePoints( start, end )
  }

}
