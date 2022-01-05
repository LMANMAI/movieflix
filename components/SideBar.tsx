import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Wraper = styled.div`
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
const SideContainer = styled.div`
  grid-column: 1 / 2;
  height: 100%;
  display: flex;
  flex-direction: column;      
  z-index: 99;
  background-color: #161A1D ;
  ul{     
     padding: 15px;
     position:fixed;
     top: 45%;
li{
    padding: 8px;
    font-size: 1.125rem;
    letter-spacing: 1px;
    color: #F5F3F4;
}

  }
  @media (max-width: 480px) {
    height: 100vh;
    position: fixed;
    width: 75%;
    z-index: 9;
    background-color: #161a1d;
    transition: 450ms ease-in-out;
    left: ${(props) => (props.position ? "0" : "-100%")};
  }
 
  }
`;
const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 15%;
  width: 100%;
  padding: 1rem 1.125rem;
  align-items: center;
  svg {
    margin: 5px;
  }
`;
const InputSearch = styled.input`
  padding: 5px 10px;
  border: none;
  outline: none;
  color: white;
  background-color: transparent;
  &:focus {
    .search_container {
      border: 1px solid blue;
    }
  }
`;
const SideBar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <Wraper position={menu}>
      <AiOutlineMenu className="svg_menu open" onClick={() => setMenu(!menu)} />
      <SideContainer position={menu}>
        <AiOutlineClose
          className="svg_menu close"
          onClick={() => setMenu(!menu)}
        />
        <SearchContainer className="search_container">
          <InputSearch type="text" name="buscador" placeholder="Buscar" />
          <AiOutlineSearch />
        </SearchContainer>
        <ul>
          <li>Series</li>
          <li>Peliculas</li>
          <li>Estrenos</li>
        </ul>
      </SideContainer>
    </Wraper>
  );
};

export default SideBar;
