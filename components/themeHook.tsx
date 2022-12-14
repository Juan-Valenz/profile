import React, { createContext, useContext, useEffect, useState } from 'react'

interface CustomHooksProps {
    children: JSX.Element | JSX.Element[];
}

const ThemeContext = createContext<[string | undefined, (themes:string)=>void]>([undefined, ()=>undefined]);
export const useThemeState = () => useContext(ThemeContext);


export const ThemeProvider: React.FC<CustomHooksProps> = ({ children }) => {
    const [theme, setTheme] = useState<string | undefined>();

    /*  FUNCTIONS   */
    const syncColorSchemeToVariable = () => {
        const scheme = localStorage.getItem('theme');
        if (scheme?.toString() === theme?.toString()) return;
        if (scheme) setTheme(scheme);
        else setTheme('default');
    }
    //  for setting the theme
    const changeTheme = (themes: string) => {
        localStorage.setItem('theme', themes);
        setTheme(t => t = themes);
    }

    /*  USE EFFECT   */
    // When page starts, set color scheme to local storage value or use the default value.
    useEffect(() => setTheme(cs => cs = localStorage.getItem('theme') ?? 'default'), [])
    // When color scheme changes, sync color scheme in all tabs.
    useEffect(() => {
        window.addEventListener('storage', syncColorSchemeToVariable);
        return () => window.removeEventListener("storage", syncColorSchemeToVariable);
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}
