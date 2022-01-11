import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useAuth } from "../context/auth";
import {
  NavBarContainer,
  BrandContainer,
  Brand,
  UserSection,
  ImgContainer,
  UserIMG,
  MenuHiddenContainer,
} from "../styles";

const NavBar = () => {
  const imgURL =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80";
  const [menu, setMenu] = useState<boolean>(false);
  const { logout } = useAuth();
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
            <li onClick={() => logout()}>Cerrar Sesion</li>
          </ul>
        </MenuHiddenContainer>
      </UserSection>
    </NavBarContainer>
  );
};

export default NavBar;
