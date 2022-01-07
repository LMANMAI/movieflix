import React, { useState, useEffect } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import {
  RowWraper,
  ContenedorPrincipal,
  ButtonCarrousel,
  ContenedorCarrousel,
  Carrousel,
  Pelicula,
} from "../styles";
import axios from "../config/axios";

const Row = (props: { tittle: string; fetchURL: string }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const requestData = await axios.get(props.fetchURL);
      setMovie(requestData?.data?.results);
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
              <Pelicula
                className={`pelicula_${props.tittle}`}
                key={onemovie.id}
              >
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
