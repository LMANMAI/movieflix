import React from "react";
import { SearchResultsWraper, SearchResultsImgContainer } from "../styles";
import { motion } from "framer-motion";
import Image from "next/image";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.95,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const SearchResults = (props: { movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <SearchResultsWraper>
      <motion.ul variants={container} initial="hidden" animate="visible">
        {props?.movies.map((movie) => {
          if (movie.backdrop_path || movie.poster_path) {
            return (
              <motion.li variants={item} key={movie.id}>
                <SearchResultsImgContainer>
                  <Image
                    src={
                      movie.backdrop_path
                        ? `${baseUrl}${movie.backdrop_path}`
                        : `${baseUrl}${movie.poster_path}`
                    }
                    alt={movie.original_title}
                  />

                  <div className="overlay">
                    <div className="text">{movie.title || movie.name}</div>
                  </div>
                </SearchResultsImgContainer>
              </motion.li>
            );
          }
        })}
      </motion.ul>
    </SearchResultsWraper>
  );
};

export default SearchResults;
