import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { Tv } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class TvsService {

  constructor(private http: HttpClient) { }

  public getPopularTvs(): Observable<Tv[]> {
    const url = this.makeUrl('/tv/popular');

    return this.http.get<Tv[]>(url).pipe(
      map(res => res['results'].map((tv: Tv) => this.setTvData(tv)))
    );
  }

  public getTopRatedTvs(): Observable<Tv[]> {
    const url = this.makeUrl('/tv/top_rated');

    return this.http.get<Tv[]>(url).pipe(
      map(res => res['results'].map((tv: Tv) => this.setTvData(tv)))
    );
  }

  public getOnGoingTvs(): Observable<Tv[]> {
    const url = this.makeUrl('/tv/on_the_air');

    return this.http.get<Tv[]>(url).pipe(
      map(res => res['results'].map((tv: Tv) => this.setTvData(tv)))
    );
  }

  private makeUrl(term: string): string {
    return env.apiUrl + term + "?api_key=" + env.apiToken;
  }

  private setTvData(response: any): Tv {
    return {
      id: response.id,
      name: response.name,
      voteCount: response.vote_count,
      voteAverage: response.vote_average,
      popularity: response.popularity,
      posterPath: `${env.apiPosterUrl}/${env.posterSize}${response.poster_path}`,
      posterSmallPath: `${env.apiPosterUrl}/${env.posterSmallSize}${response.poster_path}`,
      thumbnailPath: `${env.apiPosterUrl}/${env.thumbnailSize}${response.poster_path}`,
      overview: response.overview,
      firstAirDate: response.first_air_date,
    } as Tv;
  }

}
