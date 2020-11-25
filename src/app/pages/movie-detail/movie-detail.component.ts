import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieDetail } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services';



@Component({
  selector: 'rad-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  public movieId: string = this.route.snapshot.params.movieId;
  public movie$: Observable<MovieDetail>;

  constructor(private route: ActivatedRoute, private movieSrv: MoviesService) { }

  ngOnInit(): void {
    if (this.movieId) this.getMovieDetail();
  }

  private getMovieDetail(): void {
    this.movie$ = this.movieSrv.getMovieDetail(this.movieId);
  }

}
