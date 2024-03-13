import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('dark');

  const toggleAppTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme: toggleAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
