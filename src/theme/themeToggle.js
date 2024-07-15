
import { useState } from 'react';
import { lightTheme, darkTheme } from './theme';

const useThemeToggle  = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return { theme, toggleTheme };
};

export default useThemeToggle ;