import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import WithPrivateRoute from "../routes/WithPrivateRoute";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavBar, Hero, HomeRow, SearchResults } from "../components";
import {
  HomeWraper,
  Main,
  SideBarWraper,
  SideContainer,
  SearchContainer,
  InputSearch,
} from "../styles";
import { GetServerSideProps } from "next";
interface IDataProps {
  dataJson: {
    page: Number;
    results: [];
    total_pages: Number;
    total_results: Number;
  };
  prove: String;
}
const Home = ({ dataJson }: IDataProps) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [busqueda, setBusqueda] = useState("");
  const [moviesearched, setMoviesSearched] = useState([{}]);

  const sliceArray = dataJson.results
    .sort(() => {
      return Math.random() - 0.5;
    })
    .slice(0, 6);
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
                autocomplete="off"
                type="text"
                name="buscador"
                placeholder="Buscar"
                onChange={(e) => handleChange(e)}
              />
              <AiOutlineSearch />
            </SearchContainer>
            <ul>
              <li>Inicio</li>
              <li>Series</li>
              <li>Peliculas</li>
              <li>Estrenos</li>
              <li>Mi Lista</li>
            </ul>
          </SideContainer>
        </SideBarWraper>
        {busqueda ? (
          <SearchResults movies={moviesearched} />
        ) : (
          <Main>
            <NavBar />
            <Hero array={sliceArray} />
            <HomeRow />
          </Main>
        )}
      </HomeWraper>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  let dataRequest = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=ae57de85991d61a5ee42ca2c3dfd8558&language=en-US"
  );
  let dataJson = await dataRequest.json();

  return {
    props: {
      dataJson: dataJson,
    },
  };
};
Home.Auth = WithPrivateRoute;
export default Home;
