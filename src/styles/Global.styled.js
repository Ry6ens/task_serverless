import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    padding: 0;

    text-transform: uppercase;
  }

  body {
  
    &.no-scroll {
      overflow: hidden;
    }
  }

  a {
    font-style: initial;
    text-decoration: none;
  
    color: inherit;

    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: var(--font-PPFraktionMono);
    
    border: none;
  
    cursor: pointer;
  }

`;

export default GlobalStyles;
