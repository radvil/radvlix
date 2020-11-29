import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment as env } from '../../environments/environment';
import { Movie, MovieDetail, Company, Country } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  constructor(private http: HttpClient) { }

  public getPopularMovies(): Observable<Movie[]> {
    const url = this.makeUrl('/movie/popular');

    return this.http.get<Movie[]>(url).pipe(
      map(res => res['results'].map((movie: Movie) => this.setMovieData(movie)))
    );
  }

  public getTopRatedMovies(): Observable<Movie[]> {
    const url = this.makeUrl('/movie/top_rated');

    return this.http.get<Movie[]>(url).pipe(
      map(res => res['results'].map((movie: Movie) => this.setMovieData(movie)))
    );
  }

  public getUpcomingMovies(): Observable<Movie[]> {
    const url = this.makeUrl('/movie/upcoming');

    return this.http.get<Movie[]>(url).pipe(
      map(res => res['results'].map((movie: Movie) => this.setMovieData(movie)))
    );
  }

  public getMovieDetail(movieId: string): Observable<MovieDetail> {
    const url = this.makeUrl(`/movie/${movieId}`);

    return this.http.get<MovieDetail[]>(url).pipe(
      map(res => this.setMovieDetail(res)),
      // tap(res => console.log(res))
    );
  }

  public searchMovie(query: string): Observable<Movie[]> {
    // https://api.themoviedb.org/3/search/movie?api_key=25d5d59107be3550063d92fc082f8668&language=en-US&query=avengers&page=1&include_adult=false
    const url = this.makeUrl(`/search/movie`) + `&page=1&query=${query}`;

    return this.http.get<Movie[]>(url).pipe(
      map(res => res['results'].map((movie: Movie) => this.setMovieData(movie)))
    );
  }

  private makeUrl(endpoint: string): string {
    return env.apiUrl + endpoint + "?api_key=" + env.apiToken;
  }

  private setMovieData(response: any): Movie {
    return {
      id: response.id,
      title: response.title,
      voteCount: response.vote_count,
      voteAverage: response.vote_average,
      popularity: response.popularity,
      posterPath: `${env.apiPosterUrl}/${env.posterSize}${response.poster_path}`,
      posterSmallPath: `${env.apiPosterUrl}/${env.posterSmallSize}${response.poster_path}`,
      thumbnailPath: `${env.apiPosterUrl}/${env.thumbnailSize}${response.poster_path}`,
      isAdultMovie: response.adult,
      overview: response.overview,
      releaseDate: response.release_date,
    } as Movie;
  }

  private setMovieDetail(response: any): MovieDetail {

    const productionCompanies = response.production_companies.map((movie: any) => {
      return { ...this.setProductionCompany(movie) }
    });

    const productionCountries = response.production_countries.map((country: any) => {
      return { ...this.setProductionCountry(country) }
    });

    return {
      ...this.setMovieData(response),
      backdropPath: `${env.apiPosterUrl}/${env.backdropSize}${response.poster_path}`,
      imdbId: response.imdb_id,
      originalLanguage: response.original_language,
      originalTitle: response.original_title,
      productionCompanies,
      productionCountries,
      revenue: response.revenue,
      budget: response.budget,
      runtime: response.runtime,
      status: response.status,
      hasVideo: response.video,
      genres: response.genres,
    } as MovieDetail;
  }

  private setProductionCompany(company: any): Company {
    return {
      id: company.id,
      name: company.name,
      logoPath: `${env.apiPosterUrl}/${env.thumbnailSize}${company.logo_path}`,
      originCountry: company.origin_country,
    }
  }

  private setProductionCountry(country: any): Country {
    return {
      iso31661: country.iso_3166_1,
      name: country.name
    }
  }

}
