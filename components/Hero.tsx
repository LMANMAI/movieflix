import React from "react";
import Link from "next/link";

import { HeroWraper, HeroColumnContainer, HeroColumn } from "../styles";
const Hero = (props: { array }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <HeroWraper>
      <HeroColumnContainer>
        {props.array.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <HeroColumn>
              <img src={`${baseUrl}${movie.poster_path}`} alt={movie.name} />
            </HeroColumn>
          </Link>
        ))}
      </HeroColumnContainer>
    </HeroWraper>
  );
};

export default Hero;
