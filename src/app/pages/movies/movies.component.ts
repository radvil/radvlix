import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services';

@Component({
  selector: 'rad-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  constructor(private movieSrv: MoviesService) {}

  public popularMovies: Movie[] = [];
  public topRatedMovies: Movie[] = [];
  public upcomingMovies: Movie[] = [];
  private subs = new Subscription();

  ngOnInit(): void {
    this.getPopularMovies();
    this.getTopRatedMovies();
    this.getUpcomingMovies();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private getPopularMovies(): void {
    this.subs.add(
      this.movieSrv
        .getPopularMovies()
        .subscribe((data) => (this.popularMovies = data))
    );
  }

  private getTopRatedMovies(): void {
    this.subs.add(
      this.movieSrv
        .getTopRatedMovies()
        .subscribe((data) => (this.topRatedMovies = data))
    );
  }

  private getUpcomingMovies(): void {
    this.subs.add(
      this.movieSrv
        .getUpcomingMovies()
        .subscribe((data) => (this.upcomingMovies = data))
    );
  }

  get isLoading(): boolean {
    return (
      this.isPopularMoviesLoading &&
      this.isTopRatedMoviesLoading &&
      this.isUpcomingMoviesLoading
    );
  }

  get isPopularMoviesLoading(): boolean {
    return this.popularMovies.length <= 0;
  }

  get isTopRatedMoviesLoading(): boolean {
    return this.topRatedMovies.length <= 0;
  }

  get isUpcomingMoviesLoading(): boolean {
    return this.upcomingMovies.length <= 0;
  }
}
