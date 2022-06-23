import React, { useState, createContext } from "react";

export const NavToggleContext = createContext();

export const NavToggleContextProvider = ({ children }) => {
  const [navExpanded, setNavExpanded] = useState(false);

  return (
    <NavToggleContext.Provider value={[navExpanded, setNavExpanded]}>
      {children}
    </NavToggleContext.Provider>
  );
};
