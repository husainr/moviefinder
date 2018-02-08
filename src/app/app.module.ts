import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpModule, JsonpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { MoviesComponent } from './component/movies/movies.component';
import {MovieService} from './services/movie.service';
import { MovieComponent } from './component/movie/movie.component';
import {routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    routing
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
