import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavBar, Hero, HomeRow, Footer, SearchResults } from "../components";
import {
  HomeWraper,
  Main,
  SideBarWraper,
  SideContainer,
  SearchContainer,
  InputSearch,
} from "../styles";

const Home = () => {
  const search = false;

  const [menu, setMenu] = useState<boolean>(false);
  const [busqueda, setBusqueda] = useState("");
  const [moviesearched, setMoviesSearched] = useState([{}]);

  useEffect(() => {
    const handleSearch = async () => {
      const requestSearch = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=ae57de85991d61a5ee42ca2c3dfd8558&query=${busqueda}`
      );
      console.log("Resultado de la consulta: ", requestSearch.data.results);
      setMoviesSearched(requestSearch.data.results);
    };
    if (busqueda) {
      handleSearch();
    }
  }, [busqueda]);
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };
  return (
    <>
      <Head>
        <title>movieFLIX</title>
      </Head>
      <HomeWraper>
        <SideBarWraper position={menu}>
          <AiOutlineMenu
            className="svg_menu open"
            onClick={() => setMenu(!menu)}
          />
          <SideContainer position={menu}>
            <AiOutlineClose
              className="svg_menu close"
              onClick={() => setMenu(!menu)}
            />
            <SearchContainer className="search_container">
              <InputSearch
                type="text"
                name="buscador"
                placeholder="Buscar"
                onChange={(e) => handleChange(e)}
                autocomplete="off"
              />
              <AiOutlineSearch />
            </SearchContainer>
            <ul>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Estrenos</li>
            </ul>
          </SideContainer>
        </SideBarWraper>
        {busqueda ? (
          <SearchResults movies={moviesearched} />
        ) : (
          <Main>
            <NavBar />
            <Hero />
            <HomeRow />
          </Main>
        )}
        <Footer />
      </HomeWraper>
    </>
  );
};

export default Home;
