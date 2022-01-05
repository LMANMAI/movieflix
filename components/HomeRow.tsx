import React from "react";
import { Row } from "./";
import request from "../config/requests";

import styled from "styled-components";
const HomeRowWraper = styled.div`
  width: 95%;
  margin: 15px;
`;
const HomeRow = () => {
  return (
    <HomeRowWraper>
      <Row tittle="Tendencia" fetchURL={request.fetchTrending} />
      <Row tittle="Originales" fetchURL={request.fetchNetflixOriginals} />
      <Row tittle="Mas vistas" fetchURL={request.fetchTopRated} />
      <Row tittle="Accion" fetchURL={request.fetchActionMovies} />
      <Row tittle="Comedia" fetchURL={request.fetchComedyMovies} />
      <Row tittle="Horror" fetchURL={request.fetchHorrorMovies} />
      <Row tittle="Romance" fetchURL={request.fetchRomanceMovies} />
      <Row tittle="Documentales" fetchURL={request.fetchDocumentaries} />
    </HomeRowWraper>
  );
};

export default HomeRow;
