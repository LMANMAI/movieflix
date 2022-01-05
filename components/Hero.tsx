import React from "react";
import styled from "styled-components";

const HeroWraper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin: 15px auto;
  padding: 1.125rem;
  height: fit-content;
`;
const HeroColumnContainer = styled.div`
  display: flex;
  gap: 25px;
  @media (max-width: 780px) {
    overflow-x: auto;
  }
`;
const HeroColumn = styled.div`
  min-width: 100px;
  height: 100%;
  flex: 1;
  overflow: hidden;
  min-height: 55vh;
  margin-top: 1.25rem;
  transition: 450ms ease-in-out;
  cursor: pointer;
  & > img {
    width: 100%;
    min-height: 65vh;
    object-fit: cover;
  }
  &:first-child {
    margin-top: 0 !important;
  }
  &:last-child {
    margin-top: 0 !important;
  }
  &:nth-child(2n + 1) {
    margin-top: 4rem;
  }
  &:nth-child(3n + 1) {
    margin-top: 3.25rem;
  }
  &:hover {
    flex: 15%;
    z-index: 5;

    img {
      width: 100%;
    }
  }
`;
const Hero = () => {
  return (
    <HeroWraper>
      <HeroColumnContainer>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
        <HeroColumn>
          <img
            src="https://es.web.img3.acsta.net/newsv7/19/03/23/17/59/1281629.jpg"
            alt=""
          />
        </HeroColumn>
      </HeroColumnContainer>
    </HeroWraper>
  );
};

export default Hero;
