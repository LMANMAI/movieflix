import React, { useState } from "react";
import { HeroWraper, HeroColumnContainer, HeroColumn } from "../styles";
const Hero = (props: { array }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <HeroWraper>
      <HeroColumnContainer>
        {props.array.map((movie) => (
          <HeroColumn key={movie.id}>
            <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
          </HeroColumn>
        ))}
      </HeroColumnContainer>
    </HeroWraper>
  );
};

export default Hero;
