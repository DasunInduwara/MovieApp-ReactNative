interface Search {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

namespace ApiTypes {
  export type SearchResponse = Search;

  export type MovieResponse = Movie;

  export type MovieList = Movie[];

  export type MovieListResponse = {
    movies: MovieList;
    totalResults: number;
  };
}
