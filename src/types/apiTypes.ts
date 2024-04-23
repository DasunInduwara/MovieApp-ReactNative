interface SearchResponse {
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
