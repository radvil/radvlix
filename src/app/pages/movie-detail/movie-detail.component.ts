import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieDetail } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services';
import { environment as env } from 'src/environments/environment';


@Component({
  selector: 'rad-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  public movie: MovieDetail;
  public backgroundUrl: string;
  public errorImagePath = 'assets/no_image.jpg';
  private _subs = new Subscription();

  constructor(private route: ActivatedRoute, private movieSrv: MoviesService) { }

  ngOnInit(): void {
    this._subs.add(
      this.route.params.pipe(map(params => params['movieId']))
        .subscribe(param => this.getMovieDetail(param))
    )
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  private getMovieDetail(movieId: string): void {
    this._subs.add(
      this.movieSrv.getMovieDetail(movieId).subscribe(
        response => {
          // console.log(response);
          this.movie = response;
          this.backgroundUrl = `url(${this.movie.posterPath})`;
        }
      ));
  }
}
