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

  label {
    font-size: 0.9rem;
  }
`;

export const THEME = {
  COLORS: {
    MAIN: '#896686',
    TRANSPARENT_BLUE: '#161226c7',
    LIGHT_GREY: '#f1f1f1',
    TRANSPARENT_BLACK: '#0202027a',
    PINK: '#a84481c7',
  },
};
