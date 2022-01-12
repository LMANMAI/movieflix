import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion'
const SearchResultsWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  z-index: 5;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  background-color: #161a1d;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 5px;
  padding: 1rem;
`;
const SearchResultsImgContainer = styled.div`
  flex: 1;
  height: 150px;
  max-width: 250px;
  overflow: hidden;
  transition: 250ms ease-in-out;
  img {
    width: 100%;
    vertical-align: top;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transform-origin: center;
    .overlay {
      height: 50%;
    }
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #161a1d);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
  .text {
    white-space: nowrap;
    color: white;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 0.95,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
const SearchResults = (props: { movies }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <SearchResultsWraper>
      {props?.movies.map((movie) => {
        if (movie.backdrop_path || movie.poster_path) {
          return (
            <motion.ul 
              variants={container}
              initial="hidden"
              animate="visible"
              >
               <motion.li variants={item}>
            <SearchResultsImgContainer key={movie.id}  >        
             
              <img
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
            </motion.ul>
          );
        }
      })}
    </SearchResultsWraper>
  );
};

export default SearchResults;
