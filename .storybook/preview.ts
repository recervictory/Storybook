import type { Preview } from "@storybook/react";
//* Mui 
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { lightTheme, darkTheme } from '../src/theme';



const preview: Preview = {
  decorators : [
    withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  })],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        expanded: true, // Adds the description and default columns
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
