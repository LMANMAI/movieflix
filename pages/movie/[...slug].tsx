import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { DetailBackground, DetailBackContent } from "../../styles";
import { IoChevronBackOutline } from "react-icons/io5";
import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useAuth } from "../../context/auth";

const MoviePage = ({ movie }) => {
  const [display, setDisplay] = useState<boolean>(false);
  const [existe, setExistItem] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const { user } = useAuth();
  const router = useRouter();

  const verificarExistenciaPelicula = async () => {
    if (!user) {
      return;
    }
    try {
      const movieDocRef = doc(db, user.email, movie.title);
      const movieDocSnapshot = await getDoc(movieDocRef);

      if (movieDocSnapshot.exists()) {
        setExistItem(true);
        setDisplay(false);
      } else {
        setExistItem(false);
      }
    } catch (error) {}
  };

  const agregarItem = async (nuevoItemData, cdname) => {
    verificarExistenciaPelicula();
    try {
      await setDoc(doc(db, cdname, movie.title), nuevoItemData);
    } catch (error) {}
  };

  const eliminarPelicula = async () => {
    try {
      const movieDocRef = doc(db, user.email, movie.title);
      await deleteDoc(movieDocRef);
      setDisplay(true);
      setExistItem(false);
      setMsg("La película ha sido eliminada de la lista.");
    } catch (error) {
      setMsg(`Error al eliminar la película: ${error}`);
    }
  };

  useEffect(() => {
    verificarExistenciaPelicula();
  }, [user.email, movie.title, existe]);

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
          display={display}
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
                    <div className="movie__header">
                      <h2 style={{ fontSize: "50px" }}> {movie.title}</h2>

                      <div className="msg__container">
                        <button
                          onClick={() => {
                            if (existe) {
                              //elimino
                              eliminarPelicula();
                            } else {
                              setDisplay(true);
                              setMsg("¡Agregado!");
                              agregarItem({ movieid: movie.id }, user.email);
                            }

                            setTimeout(() => {
                              setDisplay(false);
                            }, 4000);
                          }}
                          title={
                            existe
                              ? "Eliminar de mi lista"
                              : "agregar a mi lista"
                          }
                        >
                          {existe ? "X" : "+"}
                        </button>
                        <span className="span_msg">{msg}</span>
                      </div>
                    </div>
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
    const movieId = query.slug;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    const movie = await response.json();

    return {
      props: {
        movie,
      },
    };
  } catch (error) {
    return {
      props: {
        movie: null,
      },
    };
  }
}
export default MoviePage;
