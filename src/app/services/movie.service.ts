import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MovieResults } from '../movie-results';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  getThisWeekTrendingMovies() : Observable<MovieResults> {
    return this.httpClient.get<MovieResults>(`${environment.moveapi_baseurl}${environment.trending_all_week}`);
  }
}
