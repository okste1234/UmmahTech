"use client"

import { createContext, useContext, useState } from "react";
import { configureWeb3Modal } from "./connect";

const ThemeContext = createContext({ theme: "dark", toggleTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }:any) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "cupcake" : "dark"));
  };

  configureWeb3Modal();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div data-theme={theme} className="">
        
        <div className="">{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};
