import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { ModeProvider } from "./context";
import Home from "./components/Home";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Achievements from "./components/Achievements";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    let elem = document.querySelector("html").classList;
    elem.remove("light", "dark");
    elem.add(themeMode);
  }, [themeMode]);

  return (
    <ModeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />

      <div className="">
        <Home />
        <About />
        <Projects />
        <Resume />
        <Achievements />
        <Contact />
      </div>
      <Footer />
    </ModeProvider>
  );
}

export default App;
