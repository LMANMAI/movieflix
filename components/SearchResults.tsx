import React from "react";
import Link from "next/link";
import Spinner from "./Spiner";

import { SearchResultsWraper, SearchResultsImgContainer } from "../styles";

const SearchResults = ({ movies, loading }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  if (loading) {
    return (
      <SearchResultsWraper layout={true}>
        <Spinner />
      </SearchResultsWraper>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <SearchResultsWraper layout={true}>
        <div>
          No se encontraron datos, por favor intente buscar otro título.
          Disculpe las molestias.
        </div>
      </SearchResultsWraper>
    );
  }

  return (
    <SearchResultsWraper layout={false}>
      <ul>
        {movies.map((movie) => {
          if (movie.backdrop_path || movie.poster_path) {
            return (
              <Link key={movie.id} href={`/movie/${movie.id}`}>
                <li>
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
              </Link>
            );
          }
        })}
      </ul>
    </SearchResultsWraper>
  );
};

export default SearchResults;
