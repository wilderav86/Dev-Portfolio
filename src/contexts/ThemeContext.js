import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <ThemeContext.Provider value={[lightTheme, setLightTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
