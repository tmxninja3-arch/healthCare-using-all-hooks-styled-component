/**
 * GlobalStyle.js
 * --------------
 * Uses styled-components createGlobalStyle to apply
 * a CSS reset and base body styles that react to the
 * current theme provided via ThemeProvider.
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* ---- CSS reset ---- */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
                 'Cantarell', 'Fira Sans', 'Droid Sans',
                 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    transition: background-color 0.3s ease, color 0.3s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  input, button, select, textarea {
    font-family: inherit;
  }

  /* custom scrollbar that honours theme */
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.border};
    border-radius: 4px;
  }
`;

export default GlobalStyle;