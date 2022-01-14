import React, { useState } from "react";
import { HeroWraper, HeroColumnContainer, HeroColumn } from "../styles";
const Hero = (props: { array }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState(props.array);
  return (
    <HeroWraper>
      <HeroColumnContainer>
        {movies.map((movie) => (
          <HeroColumn key={movie.id}>
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
          </HeroColumn>
        ))}
      </HeroColumnContainer>
    </HeroWraper>
  );
};

export default Hero;
