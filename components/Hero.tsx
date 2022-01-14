import React, { useState } from "react";
import { HeroWraper, HeroColumnContainer, HeroColumn } from "../styles";
import Image from "next/image";
const Hero = (props: { array }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState(props.array);
  return (
    <HeroWraper>
      <HeroColumnContainer>
        {movies.map((movie) => (
          <HeroColumn key={movie.id}>
            <Image
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
