import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  nombreUsuario: string = 'sin Nombre...'

  constructor() { }
}
