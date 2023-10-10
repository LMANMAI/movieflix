import React, { useState, useRef, useEffect } from "react";
import { BiLockAlt, BiUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useAuth } from "../context/auth";
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
  SignInContainer,
} from "../styles";
import { Spinner } from "../components";
const Login = () => {
  const {
    user,
    disabled,
    loading,
    errormsg: error,
    registerFirebase,
    login,
    setDisabled,
  } = useAuth();
  const [position, setPosition] = useState<boolean>(false);
  const [typepanel, setTypePanel] = useState<string>("login");
  //States para los errores
  const [errorname, setErrorName] = useState<boolean>(false);
  const [erroremail, setErrorEmail] = useState<boolean>(false);
  const [errorpassword, setErrorPassword] = useState<boolean>(false);
  const [erroremaillogin, setErrorEmailLogin] = useState<boolean>(false);
  const [errorpasswordlogin, setErrorPasswordLogin] = useState<boolean>(false);

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
    loginUser({
      emaillogin: "",
      passwordlogin: "",
    });
    registerUser({
      username: "",
      email: "",
      password: "",
    });
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
    setTimeout(() => {
      setErrorName(false);
      setErrorEmail(false);
      setErrorPassword(false);
      setErrorEmailLogin(false);
      setErrorPasswordLogin(false);
    }, 1000);
    if (
      (username !== "" && email !== "" && password !== "") ||
      (emaillogin.trim() !== "" && passwordlogin.length >= 6)
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
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
      return;
    } else if (passwordlogin.trim() === "") {
      setErrorPassword(true);
      setErrorMsg("La contraseña es necesaria ");
      return;
    } else if (passwordlogin.length < 6) {
      setErrorPassword(true);
      setErrorMsg("La contraseña debe ser mayor a 6 caracteres ");
      return;
    }

    loginUser({
      emaillogin: "",
      passwordlogin: "",
    });
    setErrorPassword(false);
    setErrorEmail(false);
    login(emaillogin, passwordlogin);
  };

  useEffect(() => {
    setErrorMsg(error);
    setTimeout(() => {
      setErrorMsg("");
    }, 6000);
  }, [error]);

  return (
    <Container className="container" position={position}>
      <FormContainer>
        <SignInContainer position={position} type={typepanel}>
          <Formulario
            className="sing_up_form"
            onSubmit={(e) => handleSubmit(e)}
          >
            {errorname || erroremail || errorpassword || errormsg.length > 0 ? (
              <div className="error">{errormsg}</div>
            ) : null}
            <h2>Inicia sesión</h2>

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
            <InputButton type="submit" disabled={disabled}>
              {!loading ? "Entrar" : <Spinner />}
            </InputButton>
          </Formulario>
        </SignInContainer>

        <SigninUpContainer position={!position} type={typepanel}>
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

            <InputButton type="submit" disabled={disabled}>
              {!loading ? " Comenzar!" : <Spinner />}
            </InputButton>
          </Formulario>
        </SigninUpContainer>
      </FormContainer>

      <PanelsContainer className="panels-container">
        <PanelLeft
          className="panel panel_left login"
          position={position}
          type={typepanel}
        >
          <Content className="content">
            <h3>¿Nuevo aqui?</h3>
            <p>
              Crea una cuenta y explora los diferentes titulos de la plataforma
            </p>
            <ButtonContent
              className="btn transparent"
              id="sign-up-btn"
              value="Sign Up"
              onClick={() => {
                setTypePanel("register");
                handlePosition();
              }}
            >
              Registrarme
            </ButtonContent>
          </Content>
          <img className="image" src="/img/login2.svg" alt="login_image" />
        </PanelLeft>

        <PanelRight
          className="panel panel_right register"
          position={position}
          type={typepanel}
        >
          <Content className="content">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>
              Ingresa a tu cuenta y continua agregando titulos a tus favoritos
            </p>
            <ButtonContent
              className="btn transparent"
              id="sign-in-btn"
              onClick={() => {
                setTypePanel("login");
                handlePosition();
              }}
            >
              Entrar a mi cuenta
            </ButtonContent>
          </Content>
          <img className="image" src="/img/login1.svg" alt="login_image" />
        </PanelRight>
      </PanelsContainer>
    </Container>
  );
};

//export default Login;
export default Login;
