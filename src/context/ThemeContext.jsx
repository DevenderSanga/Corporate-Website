import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("rk_theme") || "light"
  );

  const [direction, setDirection] = useState(
    () => localStorage.getItem("rk_direction") || "ltr"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("dir", direction);

    localStorage.setItem("rk_theme", theme);
    localStorage.setItem("rk_direction", direction);
  }, [theme, direction]);

  const toggleTheme = () => {
    setTheme(prev => prev === "light" ? "dark" : "light");
  };

  const toggleDirection = () => {
    setDirection(prev => prev === "ltr" ? "rtl" : "ltr");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        direction,
        toggleTheme,
        toggleDirection
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}