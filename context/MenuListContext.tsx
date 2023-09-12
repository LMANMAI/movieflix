import React, { createContext, useContext, useState } from "react";

const MenuListContext = createContext(null);

export const MenuListProvider = ({ children }) => {
  const [menulist, setMenuList] = useState(false);

  return (
    <MenuListContext.Provider value={{ menulist, setMenuList }}>
      {children}
    </MenuListContext.Provider>
  );
};

export const useMenuList = () => {
  return useContext(MenuListContext);
};
