import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { ModeProvider } from "./context/DarkMode";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";

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
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow mt-20 md:mt-24">
          <Home />
          <About />/
          <Contact />
        </div>
        <Footer />
      </div>
    </ModeProvider>
  );
}

export default App;
