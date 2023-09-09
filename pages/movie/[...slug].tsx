import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const MoviePage = ({ movie }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{movie.title || "Movie Page"}</title>
      </Head>
      <h1>Movie Details</h1>
      {movie ? (
        <div>
          <h2>Title: {movie.title}</h2>
          <p>Overview: {movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
export async function getServerSideProps({ query }) {
  try {
    // Obtener el ID o slug de la película proporcionado en query
    const movieId = query.slug; // Deberías ajustar esto según cómo sea tu API
    const response = await fetch(
      `http://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const movie = await response.json();

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return {
      props: {
        movie: null,
      },
    };
  }
}
export default MoviePage;
