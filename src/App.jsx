import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { ModeProvider } from "./context/DarkMode";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
  setThemeMode("light");
  };

  useEffect(() => {
    let elem = document.querySelector("html").classList;
    elem.remove("light", "dark");
    elem.add(themeMode);
  }, [themeMode]);

  return (
    <ModeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <Outlet />
      <Footer />
    </ModeProvider>
  );
}

export default App;
