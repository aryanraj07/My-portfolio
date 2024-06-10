import { createContext, useContext } from "react";

export const DarkMode=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})
export const ModeProvider=DarkMode.Provider;
export  function useMode(){
return useContext(DarkMode);
}
