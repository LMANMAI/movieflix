import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";
import WithPrivateRoute from "../routes/WithPrivateRoute";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavBar, Hero, HomeRow, SearchResults } from "../components";
import Link, { useRouter } from "next/router";
import requests from "../config/requests";
import {
  HomeWraper,
  Main,
  SideBarWraper,
  SideContainer,
  SearchContainer,
  InputSearch,
} from "../styles";
import { GetServerSideProps } from "next";
import { useAuth } from "../context/auth";
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
  const [moviequery, setMovieQuery] = useState([{}]);
  const { user } = useAuth();
  const router = useRouter();
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
      setMoviesSearched(requestSearch.data.results);
    };
    if (busqueda || busqueda !== "") {
      handleSearch();
    }
  }, [busqueda, moviesearched]);

  useEffect(()=> {
    console.log('cambios en las peliculas');
    setMoviesSearched(moviequery);
  },[moviequery]);
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSideMovies = async (searchType) => {
    const req = await axios(`https://api.themoviedb.org/3${searchType}`);
   setBusqueda('');
    setMovieQuery(req.data.results)
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
              <li
                onClick={() => {
                  setMoviesSearched([{}]);
                  setBusqueda('');
                  router.push("/Home");
                  setMenu(false);
                }}
              >
                Inicio
              </li>
              <li onClick={() => {
                handleSideMovies(requests.fetchTVSeries);
                 setMenu(false);
                 }}>
                Series
              </li>
              <li onClick={() => {handleSideMovies(requests.fetchActionMovies); setMenu(false);}}>
                Peliculas
              </li>
              <li onClick={() => {
                handleSideMovies(requests.fetchTrending);
                 setMenu(false);
              }}>
                Estrenos
              </li>
            </ul>
          </SideContainer>
        </SideBarWraper>
        {moviesearched.length > 2 || busqueda !== ""  ? (
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
