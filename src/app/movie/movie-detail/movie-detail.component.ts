import { Component, Input, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../Movie';


@Component({
  selector: 'app-movie-detail',
  standalone: false,
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent implements OnInit {
  id!: number;
  @Input() movie!: Movie;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieServiceService) {}

  getMovieById() {
    this.movieService.getMoviesById(this.id).subscribe((movie) => {
      this.movie = movie;
    });
  }
  
  
  ngOnInit(): void {
    if(this.movie == undefined){
      this.id = Number(this.activatedRoute.snapshot.paramMap.get('id')!);
      if(this.id){
          this.getMovieById();
      }
    }
  }
}
