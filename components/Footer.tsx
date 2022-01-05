import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1.125rem;
  height: 70px;
  width: 100%;
  grid-column: 1 / 3;
`;
const Footer = () => {
  return <FooterContainer>desde el footer</FooterContainer>;
};

export default Footer;
