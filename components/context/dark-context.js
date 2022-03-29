import { createContext, useState, useContext } from "react";

export const DarkContext = createContext();

export const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export const useDarkContext = () => {
  return useContext(DarkContext);
};
