import { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) =>{
   const [ theme, setThem] = useState("light");

   const toggleTheme =() =>{
    setTheme((prevTheme)=>(prevTheme === "light" ? "dark" :"light"));
   };
   const value={
    theme,
    toggleTheme,
   };

  return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;