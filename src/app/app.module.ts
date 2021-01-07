import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// jsonp
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';

//bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PeliculaComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
