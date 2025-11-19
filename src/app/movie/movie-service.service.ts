import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private apiUrl = environment.baseUrl;
    
  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl);

  }

  getMoviesById(id: number): Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl + '/' + id);
  }

}
