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
  MenuListContainer,
} from "../styles";
import { useMenuList } from "../context/MenuListContext";
const NavBar = ({ children }) => {
  const [profileoptions, setMenuProfile] = useState<boolean>(false);

  const { menulist, setMenuList } = useMenuList();
  const { user, logout } = useAuth();
  const router = useRouter();
  return (
    <NavBarContainer>
      <Menu>
        <div className="menu_icon" onClick={() => setMenuList(!menulist)}>
          <AiOutlineMenu />
        </div>

        <Brand onClick={() => router.push("/Home")}>
          Movie<span>FLIX</span>
        </Brand>
      </Menu>

      <MenuListContainer display={menulist}>{children}</MenuListContainer>

      <UserSection>
        <ImgContainer>
          <UserIMG src={user?.photoURL} alt={user?.displayName} />
        </ImgContainer>
        <AiOutlineCaretDown
          className="menu_button"
          onClick={() => setMenuProfile(!profileoptions)}
        />

        <MenuHiddenContainer menu={profileoptions}>
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
