import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /* $ = simbolo que significa que es un observable */

  nombre$ = new EventEmitter<string>();

  constructor() { }
}
