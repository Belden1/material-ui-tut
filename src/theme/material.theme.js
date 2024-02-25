import { createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const themeOptions = createTheme({
  palette: {
    primary: {
      main: '#9c27b0'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});
