import React, { useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useAuth } from "../context/auth";
import {
  NavBarContainer,
  Brand,
  UserSection,
  ImgContainer,
  UserIMG,
  MenuHiddenContainer,
} from "../styles";

const NavBar = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const { user, logout } = useAuth();
  return (
    <NavBarContainer>
      <div>
        <Brand>
          Movie<span>FLIX</span>
        </Brand>
      </div>

      <div className="menu__list_container">{children}</div>

      <UserSection>
        <ImgContainer>
          <UserIMG src={user?.photoURL} alt={user?.displayName} />
        </ImgContainer>
        <AiOutlineCaretDown
          className="menu_button"
          onClick={() => setMenu(!menu)}
        />

        <MenuHiddenContainer menu={menu}>
          <ul>
            <li>Mi cuenta</li>
            <li onClick={() => logout()}>Cerrar Sesion</li>
          </ul>
        </MenuHiddenContainer>
      </UserSection>
    </NavBarContainer>
  );
};

export default NavBar;
