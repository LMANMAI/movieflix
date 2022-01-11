import React, { useState, useRef, useEffect } from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useAuth } from "../context/auth";
import { useRouter } from "next/router";
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
  const { registerFirebase, user, login } = useAuth();
  const [position, setPosition] = useState<boolean>(false);
  //States para los errores
  const [errorname, setErrorName] = useState(false);
  const [erroremail, setErrorEmail] = useState(false);
  const [errorpassword, setErrorPassword] = useState(false);

  const [erroremaillogin, setErrorEmailLogin] = useState(false);
  const [errorpasswordlogin, setErrorPasswordLogin] = useState(false);
  //ref para el register
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  //error msg
  const [errormsg, setErrorMsg] = useState("");
  //register user
  const [userregister, registerUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = userregister;
  //login user
  const [userlogin, loginUser] = useState({
    emaillogin: "",
    passwordlogin: "",
  });
  const { emaillogin, passwordlogin } = userlogin;
  const emailloginRef = useRef(null);
  const passwordloginRef = useRef(null);
  const handleChangeRegister = (e) => {
    registerUser({ ...userregister, [e.target.name]: e.target.value });
  };
  const handleChangeLogin = (e) => {
    loginUser({ ...userlogin, [e.target.name]: e.target.value });
  };
  const handlePosition = () => {
    setPosition(!position);
  };

  useEffect(() => {
    if (username !== "" && errorname === true) {
      setErrorName(false);
    }
    if (email !== "" && erroremail === true) {
      setErrorEmail(false);
    }
    if (password !== "" && errorpassword === true) {
      setErrorPassword(false);
    }
    if (emaillogin !== "" && erroremaillogin === true) {
      setErrorEmailLogin(false);
    }
    if (passwordlogin !== "" && errorpasswordlogin === true) {
      setErrorPasswordLogin(false);
    }
  }, [email, username, password, user, emaillogin, passwordlogin]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      setErrorName(true);
      setErrorMsg("El nombre de usuario es necesario");
    }
    if (email.trim() === "") {
      setErrorEmail(true);
      setErrorMsg("El email es necesario");
    }
    if (password.trim() === "") {
      setErrorPassword(true);
      setErrorMsg("La contraseña es necesaria ");
    } else if (password.length < 6) {
      setErrorPassword(true);
      setErrorMsg("La contraseña debe ser mayor a 6 caracteres ");
    }
    registerFirebase(email, password, username);
    registerUser({
      username: "",
      email: "",
      password: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emaillogin.trim() === "") {
      setErrorEmail(true);
      setErrorMsg("El email es necesario");
    }
    if (passwordlogin.trim() === "") {
      setErrorPassword(true);
      setErrorMsg("La contraseña es necesaria ");
    } else if (password.length < 6) {
      setErrorPassword(true);
      setErrorMsg("La contraseña debe ser mayor a 6 caracteres ");
    }
    loginUser({
      emaillogin: "",
      passwordlogin: "",
    });
    login(emaillogin, passwordlogin);
  };
  return (
    <Container className="container" position={position}>
      <FormContainer>
        <SigninUpContainer>
          <Formulario
            className="sing_up_form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2>Inicia sesión</h2>
            {errorname || erroremail || errorpassword ? (
              <div className="error">{errormsg}</div>
            ) : null}
            <InputField error={errorname}>
              <span>
                <BiUser />
              </span>

              <Input
                type="text"
                name="emaillogin"
                value={emaillogin}
                ref={emailloginRef}
                placeholder="Nombre de usuario o Correo electronico"
                onChange={(e) => handleChangeLogin(e)}
              />
            </InputField>
            <InputField error={errorname}>
              <span>
                <BiLockAlt />
              </span>

              <Input
                name="passwordlogin"
                value={passwordlogin}
                ref={passwordloginRef}
                type="password"
                placeholder="Contraseña"
                onChange={(e) => handleChangeLogin(e)}
              />
            </InputField>
            <InputButton type="submit" value="Entrar" />
          </Formulario>

          <Formulario
            className="sing_in_form"
            onSubmit={(e) => handleRegister(e)}
          >
            <h2>Registrate</h2>
            {errorname || erroremail || errorpassword ? (
              <div className="error">{errormsg}</div>
            ) : null}
            <InputField error={errorname}>
              <span>
                <BiUser />
              </span>

              <Input
                value={username}
                ref={nameRef}
                name="username"
                type="text"
                placeholder="Nombre de usuario"
                onChange={(e) => handleChangeRegister(e)}
              />
            </InputField>
            <InputField error={erroremail}>
              <span>
                <AiOutlineMail />
              </span>
              <Input
                value={email}
                ref={emailRef}
                onChange={(e) => handleChangeRegister(e)}
                name="email"
                type="email"
                placeholder="Correo Electronico"
              />
            </InputField>
            <InputField error={errorpassword}>
              <span>
                <BiLockAlt />
              </span>

              <Input
                value={password}
                ref={passwordRef}
                onChange={(e) => handleChangeRegister(e)}
                name="password"
                type="password"
                placeholder="Contraseña"
              />
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

//export default Login;
export default Login;
