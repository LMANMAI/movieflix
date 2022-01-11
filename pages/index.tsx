import React from "react";
import {
  Tittle,
  BaseContainer,
  Wraper,
  Header,
  LogginButton,
  LandingContent,
} from "../styles";
import { LadingBox } from "../components";
import { useRouter } from "next/router";

const Landing = () => {
  const router = useRouter();
  return (
    <>
      <BaseContainer>
        <Wraper>
          <Header>
            <Tittle>
              movie<span>Flix</span>
            </Tittle>
            <LogginButton onClick={() => router.push("/Login")}>
              Iniciar Sesion
            </LogginButton>
          </Header>
          <LandingContent>
            <LadingBox
              image="/img/home-tv.jpg"
              tittle="Disfrutá en tu tele."
              subtittle={
                <>
                  Mirá en smart TV, PlayStation, Xbox, <br /> Chromecast, Apple
                  TV, reproductores de Blu-ray y más.
                </>
              }
            />
            <LadingBox
              image="/img/home-mobile.jpg"
              tittle=" Descargá tus series para mirarlas offline."
              subtittle={
                <>
                  Guardá tu contenido favorito y tené siempre <br /> algo para
                  mirar.
                </>
              }
            />
            <LadingBox
              image="/img/home-imac.jpg"
              tittle="Disfrutá donde quieras."
              subtittle={
                <>
                  Películas y series ilimitadas en tu teléfono, <br /> tablet,
                  computadora y tele sin costo extra.
                </>
              }
            />
            <LadingBox
              image="/img/home-kids.jpg"
              tittle="Crea perfiles para niños."
              subtittle="Los niños vivirán aventuras con sus personajes favoritos en un espacio diseñado exclusivamente para ellos, sin costo con tu membresía."
            />
          </LandingContent>
        </Wraper>
      </BaseContainer>
    </>
  );
};

export default Landing;
