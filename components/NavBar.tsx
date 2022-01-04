import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import styled from "styled-components";

const NavBarContainer = styled.div`
  padding: 1.125rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const BrandContainer = styled.div`
  width: 100%;
`;
const Brand = styled.h2`
  color: #ba181b;
  font-size: 1.125rem;
  text-align: center;
`;
const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  position: absolute;
  right: 45px;
  .menu_button {
    cursor: pointer;
  }
`;
const ImgContainer = styled.div`
  width: 50px;
  height: 50px;
`;
const UserIMG = styled.img`
  width: 100%;
  border-radius: 100%;
`;
const MenuHiddenContainer = styled.div`
  border: 1px solid red;
  padding: 7px;
  position: absolute;
  top: 60px;
  right: 0;
  min-width: 150px;
  text-align: center;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0px;
  transition: all 250ms ease-in-out;
  visibility: ${(props) => (props.menu ? "visible" : "hidden")};
  ul li {
    padding: 5px;
    cursor: pointer;
    &:last-child {
      border-top: 1px solid rgba(151, 151, 151, 0.34);
    }
  }
`;
const NavBar = () => {
  const imgURL =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <NavBarContainer>
      <BrandContainer>
        <Brand>
          Movie<span>FLIX</span>
        </Brand>
      </BrandContainer>

      <UserSection>
        <ImgContainer>
          <UserIMG src={imgURL} alt="user image" />
        </ImgContainer>
        <AiOutlineCaretDown
          className="menu_button"
          onClick={() => setMenu(!menu)}
        />

        <MenuHiddenContainer menu={menu}>
          <ul>
            <li>Mi cuenta</li>
            <li>Mis favoritos</li>
            <li>Cerrar Sesion</li>
          </ul>
        </MenuHiddenContainer>
      </UserSection>
    </NavBarContainer>
  );
};

export default NavBar;
