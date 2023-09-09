import React from "react";
import { SearchResultsWraper, SearchResultsImgContainer } from "../styles";

const SearchResults = ({ movies, loading }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  if ((!movies || movies.length === 0) && !loading) {
    return (
      <SearchResultsWraper layout={true}>
        <div>
          {loading
            ? "loading"
            : " No se encontraron datos, por favor intente buscar otro título. Disculpe las molestias."}
        </div>
      </SearchResultsWraper>
    );
  }

  return (
    <SearchResultsWraper layout={movies && movies.length > 0 ? false : true}>
      <ul>
        {movies.map((movie) => {
          if (movie.backdrop_path || movie.poster_path) {
            return (
              <li key={movie.id}>
                <SearchResultsImgContainer>
                  <img
                    src={`${baseUrl}${
                      movie.backdrop_path || movie.poster_path
                    }`}
                    alt={movie.original_title}
                  />

                  <div className="overlay">
                    <div className="text">{movie.title || movie.name}</div>
                  </div>
                </SearchResultsImgContainer>
              </li>
            );
          }
        })}
      </ul>
    </SearchResultsWraper>
  );
};

export default SearchResults;
