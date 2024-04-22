import { createContext, useContext } from "react";

export const themeContext = createContext({
    themeMode: "light",
    toggleTheme: () => {}
});

// this is theme provider
export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
    return useContext(themeContext);
}
