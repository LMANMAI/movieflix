import React from "react";
import { NavBar, Footer } from "../components";
import { HomeWraper, Main } from "../styles";
const Layout = (props) => {
  return (
    <>
      <HomeWraper>
        <Main>{props.children}</Main>
      </HomeWraper>
      <Footer />
    </>
  );
};
export default Layout;
