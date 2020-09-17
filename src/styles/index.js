import { createGlobalStyle } from "styled-components";
import { normalize } from "./normalize";
import RobotoRegular from "../assets/fonts/Roboto-Regular.ttf";
import PoppinsRegular from "../assets/fonts/Poppins-Regular.ttf";

export default createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'Roboto';
    src: local('Roboto Regular'), local('Roboto-Regular'),
    url(${RobotoRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins Regular'), local('Poppins-Regular'),
    url(${PoppinsRegular}) format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC,
    U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122,
    U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  body{
    font-family: 'Poppins', sans-serif;
  }
`;
