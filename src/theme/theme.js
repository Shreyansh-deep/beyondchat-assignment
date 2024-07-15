import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#35a8de', // primary color for light mode
    },
    secondary: {
      main: '#ffffff', // secondary color for light mode
    },
    background: {
      default: '#f5f5f5', // background color for light mode
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#474747', // primary color for dark mode
    },
    secondary: {
      main: '#ccc', // secondary color for dark mode
    },
    background: {
      default: '#333', // background color for dark mode
    },
  },
});

export { lightTheme, darkTheme };