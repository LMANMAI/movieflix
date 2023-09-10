import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DetailBackground, DetailBackContent } from "../../styles";
import { IoChevronBackOutline } from "react-icons/io5";
const MoviePage = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{movie.title || "Movie Page"}</title>
      </Head>
      {(movie.title === "" && movie.backdrop_path === "") ||
      movie.success === false ? (
        <div
          style={{
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <DetailBackContent>
            <button onClick={() => router.back()} title="Volver">
              <IoChevronBackOutline />
            </button>
          </DetailBackContent>
          <p>
            Parece que ocurrio un problema al traer los datos te pedimos
            disculpas.
          </p>
        </div>
      ) : (
        <DetailBackground
          posterPath={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
        >
          <div id="detail__container">
            <div className="detail__info">
              <DetailBackContent>
                <button onClick={() => router.back()} title="Volver">
                  <IoChevronBackOutline />
                </button>
              </DetailBackContent>

              <section>
                {movie ? (
                  <div>
                    <h2 style={{ fontSize: "50px" }}> {movie.title}</h2>
                    <p style={{ margin: "10px" }}>{movie.overview}</p>
                    <p>Release Date: {movie.release_date}</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </section>
            </div>
          </div>
        </DetailBackground>
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
