import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs/operators';

import { MoviesService } from 'src/app/services';

@Component({
  selector: 'rad-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss'],
})
export class SearchDialogComponent implements OnDestroy {
  
  private _subs = new Subscription();
  public searchTerm$ = new Subject<string>();
  public isLoading: boolean;
  public searchResults: Array<any>;
  public notFoundTerm: string;

  get noResultsFound(): boolean {
    return !!(this.searchResults && this.searchResults.length <= 0);
  }

  constructor(
    private _movieSrv: MoviesService,
    private _router: Router,
    public dialogRef: MatDialogRef<SearchDialogComponent>
  ) {
    this._subs.add(
      this.searchTerm$
        .pipe(
          map((event: any) => event.target.value),
          debounceTime(500),
          distinctUntilChanged(),
          filter((term) => term.length > 0)
        )
        .subscribe(term => {
          this.notFoundTerm = term;
          this.isLoading = true;
          this.getItems(term);
        })
    );
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }

  public getItems(term: string): void {
    this._subs.add(
      this._movieSrv.searchMovie(term).subscribe(
        (response) => {
          this.searchResults = response;
          this.isLoading = false;
        },
        (err) => (this.isLoading = false)
      )
    );
  }

  public showMovie(itemId: string): void {
    console.log('Showing movie test..', itemId);
    
    if (!itemId) return;
    else {
      this._router.navigateByUrl(`/movie-detail/${itemId}`);
      this.dialogRef.close();
    }
  }
}
