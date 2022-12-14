import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors["base-primary"]};
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    line-height: 160%;
    font-weight: 400;
    font-size: 1.6rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    html {
      font-size: 72.5%;
    }
  }
`;
