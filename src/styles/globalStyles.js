import { createGlobalStyle } from "styled-components";
import { black, primaryColor, dirtyWhite, darkPrimary } from "./colors";
import { containerWidth } from "./sizes";
import { primaryFont } from "./fonts";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    font-family: ${primaryFont};
  }

  body {
    color: ${black};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 1.6rem;
    line-height: 1.6;
  }

  section {
    padding: 8rem 0;
  }

  .container {
    max-width: ${containerWidth};
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  input {
    border: none;
    outline: none;
    padding: 0.5rem;
  }

  .icon {
    cursor: pointer;
    font-size: 2.4rem;
  }

  .btn {
    font-size: 1.3rem !important;
    transition: all 0.2s ease-in !important;
  }

  .btn-full {
    background: ${primaryColor} !important;
    color: ${dirtyWhite} !important;
    &:hover {
      background: ${darkPrimary} !important;
    }
  }

  .btn-ghost {
    background: transparent !important;
    border: 1px solid ${primaryColor} !important;
    color: ${primaryColor} !important;
    &:hover {
      background: ${darkPrimary} !important;
      color: ${dirtyWhite} !important;
      border-color: ${darkPrimary} !important;
    }
  }
`;
