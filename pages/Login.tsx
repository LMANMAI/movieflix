import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const SigninUpContainer = styled.div`
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

const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("/img/home-bg.jpg");
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
`;
const FormContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Formulario = styled.form`
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
const InputField = styled.div`
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
const Input = styled.input`
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
const InputButton = styled.input`
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
const PanelsContainer = styled.div`
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
const PanelLeft = styled.div`
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
  transition: 0.9s 0.6s ease-in-out;
  transform: ${(props) =>
    props.position ? "translateX(-800px)" : "translateX(0px)"};
`;
const PanelRight = styled.div`
  pointer-events: ${(props) => (props.position ? "all" : "none")};
  } ;
  padding: 3rem 12% 2rem 17%;
  .content {
    transform: ${(props) =>
      props.position ? "translateX(0px)" : "translateX(800px)"};
  }
`;
const Content = styled.div`
  color: white;
  transition: 0.9s 0.6s ease-in-out;
`;
const ButtonContent = styled(InputButton)`
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: "130px";
  height: "41px";
  font-weight: 600;
  font-size: 0.8rem;
`;

const Login = () => {
  const [position, setPosition] = useState<boolean>(false);

  const handlePosition = () => {
    setPosition(!position);
  };
  useEffect(() => {
    console.log("La pocision cambio", position);
  }, [position]);

  return (
    <Container position={position}>
      <FormContainer>
        <SigninUpContainer>
          <Formulario className="sing_up_form">
            <h2>Sign In</h2>
            <InputField>
              <span>
                <BiUser />
              </span>

              <Input type="text" placeholder="Username" />
            </InputField>
            <InputField>
              <span>
                <BiLockAlt />
              </span>

              <Input type="password" placeholder="Password" />
            </InputField>
            <InputButton type="submit" value="Login" />
          </Formulario>

          <Formulario className="sing_in_form">
            <h2>Sing Up</h2>
            <InputField>
              <span>
                <BiUser />
              </span>

              <Input type="text" placeholder="Username" />
            </InputField>
            <InputField>
              <span>
                <AiOutlineMail />
              </span>
              <Input type="email" placeholder="Email" />
            </InputField>
            <InputField>
              <span>
                <BiLockAlt />
              </span>

              <Input type="password" placeholder="Password" />
            </InputField>
            <InputButton type="submit" value="Login" />
          </Formulario>
        </SigninUpContainer>
      </FormContainer>
      <PanelsContainer>
        <PanelLeft className="panel panel_left" position={position}>
          <Content className="content">
            <h3>New Here?</h3>
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
        </PanelLeft>
        <PanelRight className="panel panel_right" position={position}>
          <Content className="content">
            <h3>Already have account?</h3>
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
        </PanelRight>
      </PanelsContainer>
    </Container>
  );
};

export default Login;
