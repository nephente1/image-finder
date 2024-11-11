import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", Open-Sans, Helvetica, Sans-Serif;
  }

  p { 
    line-height: 1.75;
  }
`;

export const THEME = {
  COLORS: {
    MAIN: '#896686',
    TRANSPARENT_BLUE: '#161226c7',
    LIGHT_GREY: '#f1f1f1',
    TRANSPARENT_BLACK: '#0202025c',
    PINK: '#954074c7',
  },
};
