import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie-results';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  imageBaseUrl: string = environment.image_url;
  @Input() movie: Movie | undefined;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
  }

  onAddToWatchlist(movie: Movie): void {
    console.log(`please add to watch list : ${movie.id}`);
    this.movieService.postWatchListOfMovies([{"movieId": movie.id, "userId": 10, "categoryId": 10, "InActive": false, "datetime": new Date()}]);
  }

  onAddToFavoriteslist(movie: Movie): void {
    console.log(`please add to favorite list : ${movie.id}`);
    this.movieService.postFavoriteMovies([{"movieId": movie.id, "userId": 10, "categoryId": 10, "InActive": false, "datetime": new Date()}]);
  }
}
