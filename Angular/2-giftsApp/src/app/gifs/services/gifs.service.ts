import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})

export class GifsService {

  private apiKey: string = '5uDWtEWxYpmaSgfLfNsp3C2sQ1oaLgZf'; //api.giphy.com/v1/gifs/search?api_key=5uDWtEWxYpmaSgfLfNsp3C2sQ1oaLgZf
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  
  private _historial: string[] = [];
  public resultados: Gif[] = [];  // Convertir la informacion obtenida del API por medio de https://app.quicktype.io/ y crear un interface


  get historial(){
    
    return [...this._historial]; // Se rompe la refencia para que no tenga cambios el private
  }

  constructor(private http: HttpClient){
    
    this._historial = JSON.parse(localStorage.getItem('datosGuardados')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('imgGuardadas')!) || [];

    /* this.resultados = JSON.parse(localStorage.getItem('imgGuardadas')!); */
    /* if( localStorage.getItem('historial')){
      this._historial = JSON.parse( localStorage.getItem('historial')!)
    } */

  }  //http propiedad

  buscarGifs( query: string = '' ){ //traductor query = consulta 

    query = query.trim().toLowerCase();

    if( !this._historial.includes( query ) ){ //includes ('dentro de la consulta)
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('datosGuardados', JSON.stringify(this._historial) ) //guardar en local storage
      
      
    }

    const params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit', '10')
      .set( 'q', query);

    

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, { params }) //simplificar el llamado del api con parametros
      .subscribe( (res ) => {
        
        this.resultados = res.data;

        localStorage.setItem('imgGuardadas', JSON.stringify(this.resultados))
        
      })
    
  }
}
