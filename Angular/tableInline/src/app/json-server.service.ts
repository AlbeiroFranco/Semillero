import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iCompany } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  constructor( private http: HttpClient) { }

  getUsers():Observable<iCompany[]>{
    return this.http.get<iCompany[]>('https://jsonplaceholder.typicode.com/users');
  }
}
