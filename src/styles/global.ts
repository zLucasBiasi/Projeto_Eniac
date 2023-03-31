import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
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
