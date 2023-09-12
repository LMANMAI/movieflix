import React, { useState, useEffect } from "react";
import { SearchResults } from "../components";
import { DetailBackContent } from "../styles";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/auth";

const Milista = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { user } = useAuth();

  const obtenerElementos = async () => {
    try {
      const listaDeseosRef = collection(db, user.email);
      const querySnapshot = await getDocs(listaDeseosRef);
      const movieIds = [];

      querySnapshot.forEach((doc) => {
        if (doc.data()) {
          movieIds.push(doc.data().movieid);
        }
      });

      const moviePromises = movieIds.map(async (movieId) => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        const movieData = await response.json();
        return movieData;
      });

      const movies = await Promise.all(moviePromises);

      const uniqueMovies = [];
      movies.forEach((movie) => {
        if (!uniqueMovies.some((m) => m.id === movie.id)) {
          uniqueMovies.push(movie);
        }
      });

      setMovieList(uniqueMovies);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerElementos();

    return () => {};
  }, []);

  return (
    <div style={{ maxWidth: "80vw", margin: "0px auto" }}>
      <DetailBackContent>
        <button onClick={() => router.back()} title="Volver">
          <IoChevronBackOutline />
        </button>
      </DetailBackContent>
      <h2 style={{ margin: "20px 0px", fontSize: "30px" }}>Mi lista</h2>
      <SearchResults movies={movieList} loading={loading} />
    </div>
  );
};

export default Milista;
