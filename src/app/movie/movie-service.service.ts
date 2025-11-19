import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiUrl = environment.baseUrl;
    
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl + 'movies' );

  }

  getMoviesById(id: number): Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl + 'movies/' + id);
  }

}
