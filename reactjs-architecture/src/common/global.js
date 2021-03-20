import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    transition: all 0.25s linear;
  }

  h1,h2,h3,h4,h5,h6 {
     color: ${({ theme }) => theme.headingColor};
     transition: all 0.25s linear;
  }
  `;
