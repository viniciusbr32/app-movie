export interface Movie {
  title: string;
  poster_path: string;
  overview: string;
  id: number;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetailsProps {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null | object;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number | undefined;
  vote_count: number;
}

export interface MoviePages {
  page: number | undefined;
  total_pages: number | undefined;
}
