import styled from "styled-components";

export const Tittle = styled.h1`
  color: red;
`;

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
export const BaseContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("/img/home-bg.jpg");
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
    transition: transform 1.1s ease-in-out;
  }

  ${SigninUpContainer} {
    left: ${(props) => props.position && "25%"};
  }
  .sing_up_form {
    z-index: ${(props) => (props.position ? "1" : "2")};
    opacity: ${(props) => (props.position ? "0" : "1")};
  }
  .sing_in_form {
    z-index: ${(props) => (props.position ? "2" : "1")};
    opacity: ${(props) => (props.position ? "1" : "0")};
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
      transition: transform 0.9s ease-in-out;
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
  padding: 0 0.4rem;
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
    font-weight: 500;}`;
export const InputButton = styled.input`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50px;
  cursor: pointer;
  background-color: #e50914;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5ms;
  text-align: center;
  &::hover {
    background-color: #b60a13;
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
