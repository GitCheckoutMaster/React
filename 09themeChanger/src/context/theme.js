import { createContext, useContext } from "react";

export const themeContext = createContext({
    // themeMode: "light",
    // toggleTheme: () => {} // this doesn't matter because we added this as values in app.jsx and defined in app.jsx as well 
});

// this is theme provider
export const ThemeProvider = themeContext.Provider;

export default function useTheme() {
    return useContext(themeContext);
}
