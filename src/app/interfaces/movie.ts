import { Company } from './company';
import { Country } from './country';

export interface Movie {
  id: number;
  title: string;
  voteCount: number;
  voteAverage: number;
  popularity: number;
  posterPath: string;
  posterSmallPath: string;
  thumbnailPath: string;
  isAdultMovie: boolean;
  overview: string;
  releaseDate: string;
}

export interface MovieDetail extends Movie {
  imdbId: string;
  originalLanguage: string;
  originalTitle: string;
  productionCompanies: Company[];
  productionCountries: Country[];
  revenue: number;
  runtime: number;
  status: string;
  hasVideo: boolean;
}
