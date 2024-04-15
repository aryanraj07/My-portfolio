import { createContext, useContext } from "react";

const DarkMode=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})
export const ModeProvider=DarkMode.Provider;
export default function useMode(){
return useContext(DarkMode);
}
