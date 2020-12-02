import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { Person } from 'src/app/interfaces';
import { MoviesService } from 'src/app/services';

@Component({
  selector: 'rad-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private movieSrv: MoviesService) {}

  private _subs = new Subscription();
  public credits: { id: string; cast: Person[]; crew: Person[] };

  ngOnInit(): void {
    this.getMovieCreditsByMovieIdParam();
  }

  private getMovieCreditsByMovieIdParam(): void {
    this._subs.add(
      this.route.params
        .pipe(
          pluck('movieIdForCredits'),
          switchMap((movieId) => this.movieSrv.getMovieCredits(movieId))
        )
        .subscribe(doc => {
          this.credits = doc;
        })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
}
