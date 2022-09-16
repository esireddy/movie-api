import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = 
[
  {path: 'movies', component: MovieListComponent},
  {path: 'movie-details/:Id', component: MovieDetailsComponent},
  {path: '', redirectTo: '/movies', pathMatch: 'full' },
  {path: '**', redirectTo: '/movies'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
