import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJsZWNrIiwiYSI6ImNsMWY3bjFsbTAwcXQzam1wY2w4eWZzcDIifQ.lrWJKcP7T3A2InpyJv_xYg';

if ( !navigator.geolocation ) { // se definen casos especificos con el navegador
  alert('Navegador no soporta el GPS')
  throw new Error ('navegador no soporta el GPS')
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
