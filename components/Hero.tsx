import React, { useState, useEffect } from "react";
import { HeroWraper, HeroColumnContainer, HeroColumn } from "../styles";
import axios from "../config/axios";
import request from "../config/requests";

const Hero = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataRequest = await axios.get(request.fetchTrending);

      setMovies(
        dataRequest.data.results
          .sort(() => {
            return Math.random() - 0.5;
          })
          .slice(0, 8)
      );
    };
    getData();
  }, []);
  return (
    <HeroWraper>
      <HeroColumnContainer>
        {movies.map((movie) => (
          <HeroColumn key={movie.id}>
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.name}
              loading="lazy"
            />
          </HeroColumn>
        ))}
      </HeroColumnContainer>
    </HeroWraper>
  );
};

export default Hero;
