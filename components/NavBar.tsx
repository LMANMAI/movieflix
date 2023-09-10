import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "../context/auth";
import { useRouter } from "next/router";
import {
  NavBarContainer,
  Brand,
  UserSection,
  ImgContainer,
  UserIMG,
  MenuHiddenContainer,
  Menu,
} from "../styles";

const NavBar = ({ children }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <NavBarContainer>
      <Menu>
        <div className="menu_icon">
          <AiOutlineMenu />
        </div>

        <Brand onClick={() => router.push("/Home")}>
          Movie<span>FLIX</span>
        </Brand>
      </Menu>

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
