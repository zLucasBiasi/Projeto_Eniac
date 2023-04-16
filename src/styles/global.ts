import styled, { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`

  ::-webkit-scrollbar {
    width: 1rem;
    background: ${theme.colors.background};
    }
  ::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.red};
    border-radius: 50px;
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
  
  body {
    background-color:${theme.colors.white};
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

`;

export const Container = styled.div`
  max-width: 125rem;
  padding: 0 3rem;
  margin: 0 auto;
  width: 100%;
  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`;
