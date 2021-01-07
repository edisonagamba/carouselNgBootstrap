import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

pelicula:string;
descripcion:any[]=[];

  constructor(private _act:ActivatedRoute, private _sm:MovieService) { 
    this._act.params.subscribe((resp:any)=>{
    this.pelicula = resp.id;
    this.getmovie(this.pelicula);
    });
  }

  ngOnInit() {
  }

getmovie(dato:string){
  this._sm.traerPelicula(dato).subscribe((resp:any) =>{
    this.descripcion=resp;
    console.log('getmovie');
    console.log(this.descripcion);
    
  });
}


}
