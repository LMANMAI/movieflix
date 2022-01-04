import React from "react";
import { NavBar, Hero, HomeRow, SideBar } from "../components";
import styled from "styled-components";

const HomeWraper = styled.main`
  background-color: #161a1d;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  color: white;
  margin: 0;
  display: grid;

  @media (min-width: 480px) {
    grid-template-columns: auto 2fr;
  }
`;
const Main = styled.main`
  overflow: auto;
`;

const Home = () => {
  return (
    <HomeWraper>
      <SideBar />
      <Main>
        <NavBar />
        <Hero />
        <HomeRow />
      </Main>
    </HomeWraper>
  );
};

export default Home;
