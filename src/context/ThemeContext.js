/**
 * ThemeContext.js
 * ---------------
 * Creates a React Context for the light / dark mode state.
 * The provider stores the flag in localStorage (via the
 * custom useLocalStorage hook) so the preference survives
 * page reloads.
 *
 * Hooks demonstrated: createContext, useCallback
 */
import { createContext, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

// Create the context with a sensible default
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

/**
 * ThemeProvider wraps the entire app so any descendant
 * can call useContext(ThemeContext) — no prop drilling.
 */
export const ThemeProvider = ({ children }) => {
  // useLocalStorage (internally uses useState + useEffect)
  const [isDarkMode, setIsDarkMode] = useLocalStorage('theme-mode', false);

  // useCallback – memoize toggle so identity is stable
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev); // functional update
  }, [setIsDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};