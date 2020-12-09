import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieDetail, Person } from '../interfaces';
import { makeUrl, setPerson, setMovie, setMovieFull } from '../@shared';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getPopularMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(makeUrl('/movie/popular'))
      .pipe(
        map((res) =>
          res['results'].map((movie: Movie) => setMovie(movie))
        )
      );
  }

  public getTopRatedMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(makeUrl('/movie/top_rated'))
      .pipe(
        map((res) =>
          res['results'].map((movie: Movie) => setMovie(movie))
        )
      );
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(makeUrl('/movie/upcoming'))
      .pipe(
        map((res) =>
          res['results'].map((movie: Movie) => setMovie(movie))
        )
      );
  }

  public getMovieDetail(movieId: string): Observable<MovieDetail> {
    return this.http
      .get<MovieDetail[]>(makeUrl(`/movie/${movieId}`))
      .pipe(map((res) => setMovieFull(res)));
  }

  public searchMovie(query: string): Observable<Movie[]> {
    // https://api.themoviedb.org/3/search/movie?api_key=25d5d59107be3550063d92fc082f8668&language=en-US&query=avengers&page=1&include_adult=false
    const url = makeUrl(`/search/movie`) + `&page=1&query=${query}`;

    return this.http
      .get<Movie[]>(url)
      .pipe(
        map((res) =>
          res['results'].map((movie: Movie) => setMovie(movie))
        )
      );
  }

  public getMovieCredits(
    movieId: string
  ): Observable<{
    id: string;
    cast: Person[];
    crew: Person[];
  }> {
    return this.http
      .get<{ id: string; cast: Person[]; crew: Person[] }>(
        makeUrl(`/movie/${movieId}/credits`)
      )
      .pipe(
        map((credit) => ({
          id: credit.id,
          cast: credit.cast
            .map((person) => setPerson(person))
            .slice(0, 12),
          crew: credit.crew
            .map((person) => setPerson(person))
            .slice(0, 12),
        }))
      );
  }
}
