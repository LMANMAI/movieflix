import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from "../config/axios";

import styled from "styled-components";
const RowWraper = styled.div`
  .contenedor_titulo_controles {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
      font-size: 1.525rem;
      color: #fff;
    }
  }
`;
const Indicadores = styled.div`
  button {
    background: white;
    height: 3px;
    width: 10px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    margin-right: 2px;
    &:hover,
    &:active {
      background: #660708;
    }
  }
`;
const ContenedorPrincipal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .flecha_izquierda {
    left: 0;
  }
  .flecha_derecha {
    right: 0;
  }
`;
const ContenedorCarrousel = styled.div`
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
`;
const Carrousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;
const Pelicula = styled.div`
  min-width: 45%;
  transition: 0.2s ease all;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-right: 5px;
  img {
    width: 100%;
    vertical-align: top;
  }
  @media (min-width: 768px) {
    min-width: 20%;
  }
  &:hover {
    transform: scale(1.2);
    transform-origin: center;
    z-index: 2;
    .overlay {
      height: 30%;
    }
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #a4161a;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
  .text {
    white-space: nowrap;
    color: white;
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
const ButtonCarrousel = styled.button`
  position: absolute;
  border: none;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 2.125rem;
  height: calc(100% - 40px);
  top: calc(50%, 25%);
  line-height: 2.125rem;
  width: 50px;
  color: white;
  cursor: pointer;
  z-index: 5;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
const Row = (props: { tittle: string; fetchURL: string }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestData = await axios.get(props.fetchURL);
      setMovie(requestData?.data?.results);
      console.log(requestData?.data?.results);
      return requestData;
    };
    fetchData();
  }, [props.fetchURL]);

  //Scroll
  const scrollRight = () => {
    const fila = document.getElementById(
      `contenedor_carrousel_${props.tittle}`
    );
    fila.scrollLeft += fila.offsetWidth;
  };
  const scrollLeft = () => {
    const fila = document.getElementById(
      `contenedor_carrousel_${props.tittle}`
    );
    fila.scrollLeft -= fila.offsetWidth;
  };
  return (
    <RowWraper>
      <div className="contenedor_titulo_controles">
        <h3>{props.tittle}</h3>
        <Indicadores className="indicadores">
          <button></button>
          <button></button>
        </Indicadores>
      </div>
      <ContenedorPrincipal className="contenedor_principal">
        <ButtonCarrousel
          role="button"
          id="flecha_izquierda"
          className="flecha_izquierda"
          onClick={() => scrollLeft()}
        >
          <BiLeftArrow />
        </ButtonCarrousel>
        <ContenedorCarrousel
          className={`contenedor_carrousel ${props.tittle}`}
          id={`contenedor_carrousel_${props.tittle}`}
        >
          <Carrousel className="carrousel">
            {movie.map((onemovie) => (
              <Pelicula className="pelicula" key={onemovie.id}>
                <a href="#">
                  <img
                    loading="lazy"
                    src={`${baseUrl}${onemovie.backdrop_path}`}
                    alt={onemovie.title}
                  />
                  <div className="overlay">
                    <div className="text">
                      {onemovie.title || onemovie.name}
                    </div>
                  </div>
                </a>
              </Pelicula>
            ))}
          </Carrousel>
        </ContenedorCarrousel>
        <ButtonCarrousel
          role="button"
          id="flecha_derecha"
          className="flecha_derecha"
          onClick={() => scrollRight()}
        >
          <BiRightArrow />
        </ButtonCarrousel>
      </ContenedorPrincipal>
    </RowWraper>
  );
};

export default Row;
