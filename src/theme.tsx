// src/themes.js

import { createTheme } from '@mui/material';
import { blueGrey, cyan, pink } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: blueGrey['900'],
      paper: blueGrey['700'],
    },
  },
});