import { useState } from 'react';
import useMode from '../context/DarkMode';

const useTheme = () => {
  const { themeMode, darkTheme, lightTheme } = useMode();
  const [isCross, setIsCross] = useState(false);

  const changeMode = () => {
    if (themeMode === "light") {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const toggleCross = () => {
    setIsCross((prev) => !prev);
  };

  return {   isCross, toggleCross,changeMode,setIsCross };
}

export default useTheme;
