import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import axios from "axios";
import WithPrivateRoute from "../routes/WithPrivateRoute";
import { AiOutlineSearch } from "react-icons/ai";
import { NavBar, Hero, HomeRow } from "../components";
import { useAuth } from "../context/auth";
const SearchDynamic = dynamic(() => import("../components/SearchResults"), {
  ssr: false,
});

import Login from "./Login";
import requests from "../config/requests";
import { HomeWraper, Main, SearchContainer, InputSearch } from "../styles";
import { GetServerSideProps } from "next";
interface IDataProps {
  dataJson: {
    page: Number;
    results: [];
    total_pages: Number;
    total_results: Number;
  };
  dataSideMovie: {
    page: Number;
    results: [];
    total_pages: Number;
    total_results: Number;
  };
}
const Home = ({ dataJson, dataSideMovie }: IDataProps) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);
  const [busqueda, setBusqueda] = useState("");
  const [moviesearched, setMoviesSearched] = useState([]);
  const router = useRouter();
  const { user } = useAuth();

  const sliceArray = dataJson.results
    .sort(() => {
      return Math.random() - 0.5;
    })
    .slice(0, 6);

  useEffect(() => {
    const handleSearch = async () => {
      setloading(true);
      const requestSearch = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=ae57de85991d61a5ee42ca2c3dfd8558&query=${busqueda}`
      );
      if (requestSearch.data) {
        setloading(false);
        setMoviesSearched(requestSearch.data.results);
      }
    };
    if (busqueda || busqueda !== "") {
      handleSearch();
    }
  }, [busqueda]);

  useEffect(() => {
    if (dataSideMovie !== undefined) {
      setMoviesSearched(dataSideMovie.results);
    }
  }, [dataSideMovie]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    if (e.target.value === "") {
      setBusqueda("");
      setMoviesSearched([]);
      router.push("/Home");
    }
  };
  const clearSearch = () => {
    setBusqueda("");
    setMoviesSearched([]);
  };
  const navigateTo = (pathname, query = {}) => {
    setloading(true);
    clearSearch();
    router.push({ pathname, query });
    if (dataJson.results.length > 0) {
      setTimeout(() => {
        setloading(false);
      }, 550);
    }
  };

  if (!user) return <Login />;

  return (
    <>
      <Head>
        <title>MovieFLIX</title>
      </Head>
      <HomeWraper>
        <NavBar>
          <SearchContainer className="search_container">
            <InputSearch
              autocomplete="off"
              type="text"
              name="buscador"
              placeholder="Buscar"
              value={busqueda}
              onChange={(e) => handleChange(e)}
            />
            <AiOutlineSearch />
          </SearchContainer>
          <ul className="menu__list">
            <li
              onClick={() =>
                navigateTo("/Home", { name: requests.fetchTVSeries })
              }
            >
              Series
            </li>
            <li
              onClick={() =>
                navigateTo("/Home", { name: requests.fetchActionMovies })
              }
            >
              Peliculas
            </li>
            <li
              onClick={() =>
                navigateTo("/Home", { name: requests.fetchTrending })
              }
            >
              Estrenos
            </li>
            <li onClick={() => navigateTo("/Milista", {})}>Mi lista</li>
          </ul>
        </NavBar>
        <Main>
          {moviesearched ? (
            <SearchDynamic movies={moviesearched} loading={loading} />
          ) : (
            <div>
              <Hero array={sliceArray} />
              <HomeRow />
            </div>
          )}
        </Main>
      </HomeWraper>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  let dataRequest = await fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=ae57de85991d61a5ee42ca2c3dfd8558&language=en-US"
  );
  let dataJson = await dataRequest.json();
  let responseMovieQuery;

  if (query.name) {
    let movieQuery = await fetch(`https://api.themoviedb.org/3${query.name}`);
    responseMovieQuery = await movieQuery.json();
  } else {
    responseMovieQuery = [{}];
  }

  return {
    props: {
      dataJson: dataJson,
      dataSideMovie: responseMovieQuery,
    },
  };
};
Home.Auth = WithPrivateRoute;
export default Home;
