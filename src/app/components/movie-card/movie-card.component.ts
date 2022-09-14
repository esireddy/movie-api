import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie-results';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  imageBaseUrl: string = environment.image_url;
  @Input() movie: Movie | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
