import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Tv } from '../interfaces';
import { makeUrl, setTvShow } from '../@shared';

@Injectable({ providedIn: 'root' })
export class TvsService {

  constructor(private http: HttpClient) { }

  public getPopularTvs(): Observable<Tv[]> {
    return this.http.get<Tv[]>(makeUrl('/tv/popular')).pipe(
      map(res => res['results'].map((tv: Tv) => setTvShow(tv)))
    );
  }

  public getTopRatedTvs(): Observable<Tv[]> {
    return this.http.get<Tv[]>(makeUrl('/tv/top_rated')).pipe(
      map(res => res['results'].map((tv: Tv) => setTvShow(tv)))
    );
  }

  public getOnGoingTvs(): Observable<Tv[]> {
    return this.http.get<Tv[]>(makeUrl('/tv/on_the_air')).pipe(
      map(res => res['results'].map((tv: Tv) => setTvShow(tv)))
    );
  }

}
