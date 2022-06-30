import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);
  
  return { theme, setTheme };
}