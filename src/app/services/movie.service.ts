import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie, MovieResults } from '../movie-results';
import {movieDBAPI, restDBAPI} from '../movie-http.interceptor'
import { Userfavorite } from '../userfavorite';
import { Userwatchlist } from '../userwatchlist';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getThisWeekTrendingMovies() : Observable<MovieResults> {
    return this.httpClient.get<MovieResults>(`${environment.moveapi_baseurl}${environment.trending_all_week}`, {context: movieDBAPI()});
  }

  getSpecificMovieDetails(movieId: number) : Observable<Movie> {
    return this.httpClient.get<Movie>(`${environment.moveapi_baseurl}${environment.movie_details}${movieId}`, {context: movieDBAPI()});
  }

  getListOfFavoriteMovies() : Observable<Userfavorite> {
    return this.httpClient.get<Userfavorite>(`${environment.restdbapi_baseurl}${environment.userfavorite_collection}`, {context: restDBAPI()});
  }

  postFavoriteMovies(favorites: Userfavorite[]) : Observable<Userfavorite[]> {
    return this.httpClient.post<Userfavorite[]>(`${environment.restdbapi_baseurl}${environment.userfavorite_collection}`, favorites, {context: restDBAPI()});
  }

  getUserWatchListOfMovies() : Observable<Userwatchlist> {
    return this.httpClient.get<Userwatchlist>(`${environment.restdbapi_baseurl}${environment.userwatchlist_collection}`, {context: restDBAPI()});
  }

  postWatchListOfMovies(favorites: Userwatchlist[]) : Observable<Userwatchlist[]> {
    return this.httpClient.post<Userwatchlist[]>(`${environment.restdbapi_baseurl}${environment.userwatchlist_collection}`, favorites, {context: restDBAPI()});
  }
}
