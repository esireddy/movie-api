import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Movie } from 'src/app/movie-results';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {

  imageBaseUrl: string = environment.image_url;
  movieId: number = -1;
  private sub: any;
  movieDetails: Movie = <Movie> {};
  @Output() addToFavorite: EventEmitter<number> = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private movieService : MovieService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => { this.movieId = +params['Id']; });

    if(!isNaN(this.movieId) && this.movieId > 0)
    {
      this.sub = this.movieService.getSpecificMovieDetails(this.movieId).subscribe(mv => this.movieDetails = mv);
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  } 

  onAddToWatchlist(): void {
      console.log(`please add to watch list : ${this.movieDetails.id}`);
      this.movieService.postWatchListOfMovies([{"movieId": this.movieDetails.id, "userId": 10, "categoryId": 10, "InActive": false, "datetime": new Date()}])
      .subscribe(data => console.log('success', data), error => console.log('Error while communicating', error));
  }

  onAddToFavoriteslist(): void {
    console.log(`please add to favorite list : ${this.movieDetails.id}`);
    this.movieService.postFavoriteMovies([{"movieId": this.movieDetails.id, "userId": 10, "categoryId": 10, "InActive": false, "datetime": new Date()}])
    .subscribe(data => console.log('success', data), error => console.log('Error while communicating', error));
  }
}
