import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const url = this.makeUrl(`/movie${movieId}`);

    return this.http.get<MovieDetail[]>(url).pipe(
      map(res => this.setMovieDetail(res))
    );
  }

  private makeUrl(term: string): string {
    return env.apiUrl + term + "?api_key=" + env.apiToken;
  }

  private setMovieData(response: any): Movie {
    return {
      id: response.id,
      title: response.title,
      voteCount: response.vote_count,
      voteAverage: response.vote_average,
      popularity: response.popularity,
      posterPath: `${env.apiPosterUrl}/${env.posterSize}/${response.poster_path}`,
      posterSmallPath: `${env.apiPosterUrl}/${env.posterSmallSize}/${response.poster_path}`,
      thumbnailPath: `${env.apiPosterUrl}/${env.thumbnailSize}/${response.poster_path}`,
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
      imdbId: response.imdb_id,
      originalLanguage: response.original_language,
      originalTitle: response.original_title,
      productionCompanies,
      productionCountries,
      revenue: response.revenue,
      runtime: response.runtime,
      status: response.status,
      hasVideo: response.video,
    } as MovieDetail;
  }

  private setProductionCompany(company: any): Company {
    return {
      id: company.id,
      name: company.name,
      logoPath: company.logo_path,
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
