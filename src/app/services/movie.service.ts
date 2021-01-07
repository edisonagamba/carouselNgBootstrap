import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey:string = 'API_KEY_THEMOVIEDB'; // put your own API_KEY here
  private urlMovie:string = 'https://api.themoviedb.org/3';
 
  constructor( private _http:HttpClient) { }

  obtenerDestacados(){
    let url = `${this.urlMovie}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`; 
    return this._http.jsonp(url, 'callback')
    .pipe(map(resp => resp));
  }
  
  mejoresPeliculas(){
    let url = `${this.urlMovie}/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es`; 
    return this._http.jsonp(url, 'callback')
    .pipe(map(resp => resp));
}

  traerPelicula(pelicula:string){
    let url = `${this.urlMovie}/movie/${pelicula}?api_key=${this.apiKey}&language=es`; 
    return this._http.jsonp(url, 'callback')
    .pipe(map(resp => resp));
  }
}
