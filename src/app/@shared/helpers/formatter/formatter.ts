import { environment as env } from '../../../../environments/environment';
import { Company, Country, Movie, MovieDetail, Person, Tv } from '../../../interfaces';

export function makeUrl(endpoint: string): string {
  return env.tmdbConfig.v3URL + endpoint + '?api_key=' + env.tmdbConfig.v3Token;
}

export function makeImageUrl(size: string, path: string): string {
  return `${env.tmdbConfig.imageURL}/${size}${path}`;
}

export function setPerson(person: any): Person {
  return {
    id: person.id,
    name: person.name,
    gender: person.gender,
    castId: person.cast_id,
    creditId: person.credit_id,
    character: person.character,
    popularity: person.popularity,
    originalName: person.original_name,
    knownForDepartment: person.known_for_department,
    profilePath: makeImageUrl(
      env.tmdbConfig.imageSize.medium,
      person.profile_path
    ),
  };
}

export function setMovie(response: any): Movie {
  const { medium, small, thumb } = env.tmdbConfig.imageSize;
  return {
    id: response.id,
    title: response.title,
    voteCount: response.vote_count,
    voteAverage: response.vote_average,
    popularity: response.popularity,
    posterPath: makeImageUrl(medium, response.poster_path),
    posterSmallPath: makeImageUrl(small, response.poster_path),
    thumbnailPath: makeImageUrl(thumb, response.poster_path),
    isAdultMovie: response.adult,
    overview: response.overview,
    releaseDate: response.release_date,
  } as Movie;
}

export function setMovieFull(response: any): MovieDetail {
  const productionCompanies = response.production_companies.map(
    (movie: any) => {
      return { ...setCompany(movie) };
    }
  );

  const productionCountries = response.production_countries.map(
    (country: any) => {
      return { ...setCountry(country) };
    }
  );

  return {
    ...setMovie(response),
    backdropPath: makeImageUrl(
      env.tmdbConfig.imageSize.large,
      response.poster_path
    ),
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

export function setCompany(company: any): Company {
  const { thumb } = env.tmdbConfig.imageSize;
  return {
    id: company.id,
    name: company.name,
    logoPath: makeImageUrl(thumb, company.logo_path),
    originCountry: company.origin_country,
  };
}

export function setCountry(country: any): Country {
  return {
    iso31661: country.iso_3166_1,
    name: country.name,
  };
}

export function setTvShow(response: any): Tv {
  const { thumb, small, medium } = env.tmdbConfig.imageSize;
  const posterPath = response.poster_path;

  return {
    id: response.id,
    name: response.name,
    voteCount: response.vote_count,
    voteAverage: response.vote_average,
    popularity: response.popularity,
    posterPath: makeImageUrl(medium, posterPath),
    posterSmallPath: makeImageUrl(small, posterPath),
    thumbnailPath: makeImageUrl(thumb, posterPath),
    overview: response.overview,
    firstAirDate: response.first_air_date,
  } as Tv;
}