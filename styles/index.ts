import styled from "styled-components";

export const BaseContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("/img/home-bg.jpg");
`;
// Landing page
export const Tittle = styled.h1`
  color: red;
  font-size: 30px;
  text-transform: capitalize;
`;
export const Wraper = styled.main`
  width: 90%;
  margin: 0 auto;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 45px;
  padding: 15px 10px;
`;
export const LogginButton = styled.button`
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;
export const Box = styled.div`
  min-width: 270px;
  width: 45%;
  min-height: 250px;
  height: 25vh;
  border-radius: 15px;
  color: white;
  background-color: black;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: 0.5s 0.1s ease-in-out;
  transition-delay: 0.15s;
  img {
    width: 30%;
    align-self: center;
    justify-self: center;
    transition: 0.5s 0.1s ease-in-out;
  }
  @media(max-width: 768px){
   &{
    width: 25%;
    flex: 1;
   }
    img{
     display: none;
    }
  }
  &:nth-child(2) {
    img {
      width: 15%;
    }
  };
  &:hover{
    cursor: pointer;
     img{
      width: 40%;
     }
    &:nth-child(2) {
    img {
      width: 20%;
    }
  };

`;
export const LandingContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 1rem;
  z-index: 1;
  position: relative;
`;
export const BlurBox = styled.div`
  border: 1px solid red;
  width: 80%;
  height: 90%;
  position: absolute;
  min-height: 403px;
  z-index: 2;
  filter: blur(4px) !important;
`;
//Login Page
export const SigninUpContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
`;

export const Container = styled(BaseContainer)`
  &::before {
    content: "";
    position: absolute;
    width: 2000px;
    height: 2000px;
    border-radius: 50%;
    background: linear-gradient(-45deg, #e50914, #fe0404);
    opacity: 0.8;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    z-index: 6;
    transition: 1.8s ease-in-out;
    transform: ${(props) => props.position && "translate(100%, -50%)"};
    right: ${(props) => props.position && "52%"};
  }
  .image {
    width: 100%;
    transition:  1.1s ease-in-out;
    transition-delay: 0.6s;
  }

  ${SigninUpContainer} {
    left: ${(props) => props.position && "25%"};
  }
  .sing_up_form ,
  .sing_in_form {
    transition: all 250ms ease-in-out ;
  }
  .sing_up_form {
    z-index: ${(props) => (props.position ? "1" : "2")};
    opacity: ${(props) => (props.position ? "0" : "1")};
    transform:  ${(props) =>
      props.position ? "translateX(100vw)" : "initial"};
      border: 1px solid red;
  }
  .sing_in_form {
    z-index: ${(props) => (props.position ? "2" : "1")};
    opacity: ${(props) => (props.position ? "1" : "0")};

   transform:  ${(props) =>
     props.position ? "initial" : "translateX(-100vw)"};
     border: 1px solid blue;
  }
  @media (max-width: 870px) {
    .container {
      min-height: 800px;
      height: 100vh;
    }
    &:before {
      width: 1500px;
      height: 1500px;
      left: 30%;
      bottom: ${(props) => (props.position ? "32%" : "65%")};
      transform: translateX(-50%);
      right: initial;
      top: initial;
      transition: 2s ease-in-out;
      transform: ${(props) => props.position && "translate(-50%, 100%)"};
    }
    .image {
      width: 200px;
      transition:  0.9s ease-in-out;
      transition-delay: 0.6s;
    }
    ${SigninUpContainer} {
      width: 100%;
      left: 50%;
      top: ${(props) => (props.position ? "15%" : "95%")};
      transform: ${(props) =>
        props.position ? "translate(-50%, 0)" : "translate(-50%, -100%)"};
      transition: 1.5s 0.8s ease-in-out;
      pointer-events: all;
      z-index: 99;
    }
    .panels-container {
      // background-color: green;
      z-index: 10;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr;
    }
    .panel {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 2.5rem 8%;
    }
    .panel_right,
    .panel_left {
      flex-direction: row !important;
    }
    .panel h3 {
      font-size: 1.2rem;
    }
    .panel p {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
    .btn.transparent {
      width: 110px;
      height: 35px;
      font-size: 0.7rem;
    }
    .panel .content {
      padding-right: 15%;
    }
    .panel_right {
      grid-row: 3 / 4;
    }
    .panel_left {
      grid-row: 1 / 2;
    }
    .panel_right .content,
    .panel_right .image {
      transform: ${(props) => props.position && "translateY(0px)"};
    }
    .panel_right.content {
      transform: translateY(300px);
    }
  }

  @media (max-width: 570px) {
    form {
    padding: 0 1.5rem;
  }

  .image {
    display: none;
  }
  .panel .content {
    padding: 0.5rem 1rem;
  }
  .container {
    padding: 1.5rem;
  }

  &::before {
    bottom: ${(props) => (props.position ? "28%" : "72%")} ;
    left: 50%;
  }

}
  }
`;
export const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    font-size: 2.2rem;
    color: white;
    margin-bottom: 10px;
  }
  grid-column: 1 / 2;
  grid-row: 1/ 2;
  padding: 0 5rem;
  overflow: hidden;
  transition: 0.2s 0.7s ease-in-out;
  .error {
    background: #a4161a;
    padding: 1rem 8px;
    border-radius: 15px;
    color: white;
    text-align: center;
    font-size: 14px;
  }
`;
export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  overflow: hidden;
  padding: 0 0.4rem;
  outline: ${(props) => (props.error ? "2px solid #ba181b" : "none")};
  span {
    text-align: center;
    line-height: 55px;
    color: #acacac;
    font-size: 1.1rem;
  }
`;
export const Input = styled.input`
 background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem:
    color: #333;
    &::placeholder{
    color: #aaa;
    font-weight: 500;}

    `;
export const InputButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50px;

  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5ms;
  text-align: center;
  &:hover {
    background-color: #b60a13;
    cursor: pointer;
  }
  &:disabled {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
    cursor: not-allowed !important;
  }
`;
export const PanelsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .panel {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: center;
    z-index: 7;
    h3 {
      font-weight: 600;
      line-height: 1;
      font-size: 1.5rem;
    }
    p {
      font-size: 0.93rem;
      padding: 0.7rem 0;
    }
  }
`;
export const PanelLeft = styled.div`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
  transition: 0.9s 0.6s ease-in-out;
  transform: ${(props) =>
    props.position ? "translateX(-800px)" : "translateX(0px)"};
`;
export const PanelRight = styled.div`
  pointer-events: ${(props) => (props.position ? "all" : "none")};
  } ;
  padding: 3rem 12% 2rem 17%;
  .content, & .image{
    transform: ${(props) =>
      props.position ? "translateX(0px)" : "translateX(800px)"};
  }
`;
export const Content = styled.div`
  color: white;
  transition: 0.9s 0.6s ease-in-out;
`;
export const ButtonContent = styled(InputButton)`
  margin: 0;
  background: none;
  border: 3px solid #fff;
  width: "130px";
  height: "41px";
  font-weight: 600;
  font-size: 0.8rem;
`;

/* ------    Row      -----------*/

export const RowWraper = styled.div`
  .contenedor_titulo_controles {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
      font-size: 1.525rem;
      color: #fff;
    }
  }
`;

export const ContenedorPrincipal = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .flecha_izquierda {
    left: 0;
  }
  .flecha_derecha {
    right: 0;
  }
`;
export const ContenedorCarrousel = styled.div`
  width: 100%;
  padding: 20px 0;
  overflow: hidden;
`;
export const Carrousel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;
export const Pelicula = styled.div`
  min-width: 45%;
  transition: 0.2s ease all;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    vertical-align: top;
  }
  @media (min-width: 768px) {
    min-width: 25%;
  }
  &:hover {
    transform: scale(1.2);
    transform-origin: center;
    z-index: 2;
    .overlay {
      height: 30%;
    }
  }
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #111);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
  .text {
    white-space: nowrap;
    color: white;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;
export const ButtonCarrousel = styled.button`
  position: absolute;
  border: none;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.03125) 6%,
    rgba(3, 3, 0, 0.41780462184873945) 15%,
    rgba(13, 12, 0, 0.7539390756302521) 25%,
    rgba(17, 16, 0, 0.7483368347338936) 75%,
    rgba(3, 3, 0, 0.4234068627450981) 84%,
    rgba(0, 0, 0, 0.03405112044817926) 94%
  );
  font-size: 2.125rem;
  height: calc(100% - 40px);
  top: calc(50%, 25%);
  line-height: 2.125rem;
  width: 50px;
  color: white;
  cursor: pointer;
  z-index: 5;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

/***HOME */

export const HomeWraper = styled.section`
  background: #1c2023;
  background: linear-gradient(0deg, rgba(17, 17, 17, 1) 0%, rgb(28 32 35) 45%);
  width: 100%;
  height: fit-content;
  color: white;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Main = styled.main`
  overflow-x: hidden;
  overflow-y: clip;
  min-height: 100vh;
  margin: 0px auto;
`;
/**FOOTER */
export const FooterComponent = styled.footer`
  background-color: #111;
  color: #757575;
  padding: 40px 0;
  font-size: 14px;
  display: flex;
  .footer-content {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .footer-logo img {
    width: 150px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .footer-links li {
    margin: 0;
    padding: 0;
  }

  .footer-links a {
    text-decoration: none;
    color: #757575;
    transition: color 0.2s;
  }

  .footer-links a:hover {
    color: #fff;
  }

  .footer-language select,
  .footer-country select {
    background-color: #333;
    border: none;
    color: #757575;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    outline: none;
  }

  .footer-country select {
    width: 150px;
  }

  .footer-country,
  .footer-language {
    margin-top: 20px;
    display: flex;
    gap: 10px;
  }

  @media screen and (max-width: 768px) {
    .footer-links {
      flex-direction: column;
    }
  }
`;

/**SIDEBAR */

export const SideBarWraper = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  .svg_menu.open {
    position: absolute;
    left: 25px;
    top: 25px;
    display: ${(props) => props.position && "none"};
  }
  .svg_menu.close {
    margin: 25px;
    display: ${(props) => !props.position && "none"};
  }
  @media (min-width: 480px) {
    .svg_menu {
      display: none;
    }
  }
`;
export const SideContainer = styled.div`
  grid-column: 1 / 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
  background-color: #0c0e0f ;
  ul{
    position:fixed;
     padding: 15px;
     top: 45%;
     width: 100%;
     max-width: 230px;
     padding: 0 15px;
li{
    padding: 8px;
    font-size: 1.125rem;
    letter-spacing: 1px;
    color: #F5F3F4;
    cursor: pointer;
    &:hover{
      background: #A4161A;
    }
}

  }
  @media (max-width: 480px) {
    height: 100vh;
    position: fixed;
    width: 75%;
    z-index: 9;
    background-color: #0c0e0f;
    transition: 450ms ease-in-out;
    left: ${(props) => (props.position ? "0" : "-100%")};
  }

  }
`;
export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 15%;
  width: 100%;
  margin: 1rem 1.125rem;
  padding: 5px;
  border-radius: 10px;
  align-items: center;

  max-width: 300px;
  background: #333;

  svg {
    margin: 5px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;
export const InputSearch = styled.input`
  padding: 5px 10px;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;
  &:focus {
    .search_container > svg {
      background-color: #ba181b;
    }
  }
`;

/**NavBAr */
export const NavBarContainer = styled.div`
  padding: 1.125rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 80vw;
  min-width: 80vw;
  margin: 0px auto;
  .menu__list_container {
    display: flex;
    flex-direction: row-reverse;
    flex-grow: 0.5;
    justify-content: space-between;
    .menu__list {
      display: none;
      li {
        cursor: pointer;
      }
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
  .menu_icon {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
export const Brand = styled.h2`
  color: #ba181b;
  font-size: 1.125rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: initial;
  }
`;
export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  //position: absolute;
  right: 16vw;
  .menu_button {
    cursor: pointer;
  }
`;
export const ImgContainer = styled.div`
  width: 30px;
  height: 30px;
`;
export const UserIMG = styled.img`
  width: 100%;
  border-radius: 100%;
`;
export const MenuHiddenContainer = styled.div`
  padding: 7px;
  position: absolute;
  top: 60px;
  left: calc(80vw - 30px);
  min-width: 150px;
  text-align: center;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  transition: all 250ms ease-in-out;
  visibility: ${(props) => (props.menu ? "visible" : "hidden")};
  ul {
    width: 100%;
    max-width: 230px;
  }
  ul li {
    padding: 5px;
    cursor: pointer;
    &:last-child {
      border-top: 1px solid rgba(151, 151, 151, 0.34);
    }
  }
`;
export const HomeRowWraper = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: 15px;
  overflow: hidden;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 78vw;
  }
`;

/**HERO */
export const HeroWraper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 80vw;
  margin: 15px auto;
  padding: 1.125rem;
  height: fit-content;
`;
export const HeroColumnContainer = styled.div`
  display: flex;
  gap: 25px;
  overflow-x: hidden;
`;
export const HeroColumn = styled.div`
  min-width: 100vw;
  height: 75vh;
  flex: 1;
  overflow: hidden;
  min-height: 55vh;
  cursor: pointer;
  transition-timing-function: ease-out;
  transition: 0.21s;
  & > img {
    width: 100%;
    min-height: 65vh;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    min-width: 100vw;
    min-width: 100px;
    height: 100%;
    margin-top: 1.25rem;

    &:first-child {
      margin-top: 0 !important;
    }
    &:last-child {
      margin-top: 0 !important;
    }
    &:nth-child(2n + 1) {
      margin-top: 4rem;
    }
    &:nth-child(3n + 1) {
      margin-top: 3.25rem;
    }

    &:hover {
      flex: 2;
      z-index: 5;
      img {
        width: 100%;
      }
    }
  }
`;
export const SearchResultsWraper = styled.div`
  width: 100%;
  max-width: 80vw;
  min-height: 100vh;
  z-index: 5;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  position: relative;
  ul {
    display: ${(props) => (!props.layout ? "grid" : "flex")};
    grid-template-columns: repeat(auto-fill, minmax(49%, 1fr));
    gap: 5px;
  }
  padding: 1rem;
  @media (min-width: 768px) {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(23%, 1fr));
    }
  }
`;
export const SearchResultsImgContainer = styled.div`
  flex: 1;
  height: 150px;
  overflow: hidden;
  transition: 250ms ease-in-out;
  img {
    width: 100%;
    vertical-align: top;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.08);
    transform-origin: center;
    box-shadow: 11px -4px 86px -21px rgba(0, 0, 0, 0.93);
    & > .overlay {
      height: 50%;
      display: block;
    }
  }

  .overlay {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #161a1d);
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }
  .text {
    white-space: nowrap;
    color: white;
    font-size: 12px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
`;

/**DETAIL */
export const DetailBackground = styled.div`
  width: 100%;
  background: url(${(props) => props.posterPath}) center/cover no-repeat;
  height: 100vh;
  #detail__container {
    width: 100vw;
    height: 100vh;
    background: rgb(17, 17, 17);
    background: linear-gradient(
      0deg,
      rgba(17, 17, 17, 1) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .detail__info {
    width: 80%;
    height: 100vh;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 5rem;
  }
`;

export const DetailBackContent = styled.div`
  padding: 5px 0px;
  button {
    cursor: pointer;
    border: none;
    background: rgba(17, 16, 0, 0.7483368347338936);
    padding: 5px;
    border-radius: 100%;
    color: white;
  }
`;
