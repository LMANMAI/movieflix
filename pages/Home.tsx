import React from "react";
import Head from "next/head";
import { NavBar, Hero, HomeRow, SideBar, Footer } from "../components";
import styled from "styled-components";

const HomeWraper = styled.main`
  background-color: #161a1d;
  width: 100%;
  height: fit-content;
  //min-height: 100vh;
  color: white;
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  @media (min-width: 480px) {
    grid-template-columns: auto 2fr;
    grid-template: auto 1fr auto / auto 2fr;
  }
`;
const Main = styled.main`
  overflow-x: auto;
  max-width: 100vw;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  @media (min-width: 480px) {
    max-width: 80vw;
  }
`;

const Home = () => {
  return (
    <>
      <Head>
        <title>movieFLIX</title>
      </Head>
      <HomeWraper>
        <SideBar />
        <Main>
          <NavBar />
          <Hero />
        </Main>
        <HomeRow />
        <Footer />
      </HomeWraper>
    </>
  );
};

export default Home;
