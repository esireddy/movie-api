import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResults } from 'src/app/movie-results';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  trendingMovies$: Observable<MovieResults> | undefined;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.trendingMovies$ = this.movieService.getThisWeekTrendingMovies();
  }

}
