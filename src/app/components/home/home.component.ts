import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  datos:string="";
  peliculas:string[]=[];
  imgUrl_bp:string="https://image.tmdb.org/t/p/w500/";
  constructor(private _ms:MovieService) { }

  ngOnInit() {
    this.importantes();
  }

  importantes(){
    this._ms.obtenerDestacados().subscribe((data:any) => {
      this.peliculas=data.results;
    });
  }

}
