import React, { useState } from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import {
  Container,
  FormContainer,
  SigninUpContainer,
  Formulario,
  InputField,
  Input,
  InputButton,
  PanelsContainer,
  PanelLeft,
  Content,
  PanelRight,
  ButtonContent,
} from "../styles";
const Login = () => {
  const [position, setPosition] = useState<boolean>(false);

  const handlePosition = () => {
    setPosition(!position);
  };
  return (
    <Container className="container" position={position}>
      <FormContainer>
        <SigninUpContainer>
          <Formulario className="sing_up_form">
            <h2>Inicia sesión</h2>
            <InputField>
              <span>
                <BiUser />
              </span>

              <Input
                type="text"
                placeholder="Nombre de usuario o Correo electronico"
              />
            </InputField>
            <InputField>
              <span>
                <BiLockAlt />
              </span>

              <Input type="password" placeholder="Contraseña" />
            </InputField>
            <InputButton type="submit" value="Entrar" />
          </Formulario>

          <Formulario className="sing_in_form">
            <h2>Registrate</h2>
            <InputField>
              <span>
                <BiUser />
              </span>

              <Input type="text" placeholder="Nombre de usuario" />
            </InputField>
            <InputField>
              <span>
                <AiOutlineMail />
              </span>
              <Input type="email" placeholder="Correo Electronico" />
            </InputField>
            <InputField>
              <span>
                <BiLockAlt />
              </span>

              <Input type="password" placeholder="Contraseña" />
            </InputField>
            <InputButton type="submit" value="Comenzar!" />
          </Formulario>
        </SigninUpContainer>
      </FormContainer>
      <PanelsContainer className="panels-container">
        <PanelLeft className="panel panel_left" position={position}>
          <Content className="content">
            <h3>¿Nuevo aqui?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora?
            </p>
            <ButtonContent
              className="btn transparent"
              id="sign-up-btn"
              value="Sign Up"
              onClick={() => handlePosition()}
            />
          </Content>
          <img className="image" src="/img/login2.svg" alt="login_image" />
        </PanelLeft>
        <PanelRight className="panel panel_right" position={position}>
          <Content className="content">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora?
            </p>
            <ButtonContent
              className="btn transparent"
              id="sign-in-btn"
              value="Sign In"
              onClick={() => handlePosition()}
            />
          </Content>
          <img className="image" src="/img/login1.svg" alt="login_image" />
        </PanelRight>
      </PanelsContainer>
    </Container>
  );
};

export default Login;
