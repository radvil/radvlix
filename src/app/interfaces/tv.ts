import { Company } from './company';
import { Country } from './country';
import { Episode } from './episode';
import { Genre } from './genre';
import { Language } from './language';
import { Producer } from './producer';
import { Season } from './season';

export interface Tv {
  id: number;
  name: string;
  voteCount: number;
  voteAverage: number;
  popularity: number;
  posterPath: string;
  thumbnailPath: string;
  overview: string;
  firstAirDate: string;
}

export interface TvDetail extends Tv {
  backdropPath: string;
  createdBy: Producer[];
  episodeRunTime: number[]
  firstAirDate: string;
  genres: Genre[];
  homepage: string;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: Episode;
  nextEpisodeToAir: Episode;
  numberOfEpisodes: number,
  numberOfSeasons: number,
  originCountry: string[],
  originalLanguage: string;
  originalName?: string;
  productionCountries: Country[];
  productionCompanies: Company[];
  seasons: Season[];
  spokenLanguages: Language[];
  status: string;
  tagline: string;
  type?: string;
}
