//import por causa da parte da tipografia
import styled from "styled-components";

//CORES
export const color = {
  //texto e icones
  black: "#131313",
  gray: "#666666",
  blue_vivid: "#036B9F",
  mint_mid: "#1CE4BF",
  mint_dark: "#07362D",

  //fundos
  blue_dark: "#023047",
  blue_mid: "#20495D",
  mint_vivid: "#18CCAC",
  danger: "#AE0B34",

  //texto e icones + fundos
  white: "#FCFCFC",
  blue_light: "#CCD6DA",
};

//ESPAÇOS - Padding || Margins
export const space = {
  xs: "2px", 
  s: "4px", 
  m: "8px", 
  l: "12px", 
  xl: "16px", 
  xxl: "24px",
  xxxl: "32px",
  max: "46px",
};

//TAMANHOS - icones, avatares e badges
export const size = {
  xs: "12px",
  s: "24px",
  m: "35px",
  ml: "40px",
  l: "50px",
  xl: "60px",
  xxl: "70px",
  xxxl: "80px",
  max: "100px",
};

//BORDER RADIUS - cards e botões
export const radius = {
  s: "8px", // cards
  m: "12px", // btns
  l: "16px", // cards/linhas totalmente redondas como as da leaderboard
};

//TIPOGRAFIA
//HEADLINES
//↓↓↓ NÃO ESTAMOS A USAR ESTES AINDA ↓↓↓
export const H1 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 98px;
  letter-spacing: -1.5px;
`;

export const H2 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 300;
  font-size: 61px;
  letter-spacing: -0.5px;
`;

export const H3 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 49px;
`;

export const H4 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 35px;
  letter-spacing: 0.25px;
`;
//↑↑↑ NÃO ESTAMOS A USAR ESTES AINDA ↑↑↑

export const H5 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  letter-spacing: 0.5px;
`;

export const H6 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.15px;
`;

//SUBTITLES
export const SUB1 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.15px;
`;

export const SUB2 = styled.header`
  font-family: "Readex Pro";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.1px;
`;

//BODY
export const B1 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const B2 = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.1px;
`;

//BUTTONS
export const BTN_BIG = styled.button`
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  `;

export const BTN_BIG_txt = styled.section`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const BTN_SM = styled.button`
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.25px;
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  `;

export const BTN_SM_txt = styled.section`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.25px;
`;

//LINK
export const LINK = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.25px;
  text-decoration-line: underline;

  color: #036b9f;
`;

//CAPTION
export const CAP = styled.header`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.4px;
`;

//OVERLINE
export const OL = styled.header`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

//NUMBERS
export const NUM_SM = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

export const NUM_BIG = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
`;

//SVG - Icons
export const icon = {
  add: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  ),
  edit: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M10.544 6.765L11.234 7.455L4.43902 14.25H3.74902V13.56L10.544 6.765ZM13.244 2.25C13.0565 2.25 12.8615 2.325 12.719 2.4675L11.3465 3.84L14.159 6.6525L15.5315 5.28C15.824 4.9875 15.824 4.515 15.5315 4.2225L13.7765 2.4675C13.6265 2.3175 13.439 2.25 13.244 2.25ZM10.544 4.6425L2.24902 12.9375V15.75H5.06152L13.3565 7.455L10.544 4.6425Z" />
    </svg>
  ),
  logout: (
    <svg width="24" height="23" viewBox="0 0 24 23">
      <path d="M13.25 6L12.1925 7.0575L13.3775 8.25H7.25V9.75H13.3775L12.1925 10.935L13.25 12L16.25 9L13.25 6ZM4.25 3.75H9.5V2.25H4.25C3.425 2.25 2.75 2.925 2.75 3.75V14.25C2.75 15.075 3.425 15.75 4.25 15.75H9.5V14.25H4.25V3.75Z" />
    </svg>
  ),
  devices: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M16 9V13.66L12.5 17.17V19H11.5V17.17L8 13.65V9H16ZM16 3H14V7H10V3H8V7H7.99C6.9 6.99 6 7.89 6 8.98V14.5L9.5 18V21H14.5V18L18 14.49V9C18 7.9 17.1 7 16 7V3Z" />
    </svg>
  ),
  pay: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z" />
    </svg>
  ),
  help: (
    <svg width="24" height="23" viewBox="0 0 24 23">
      <path d="M8.75 13.5H10.25V12H8.75V13.5ZM9.5 1.5C5.36 1.5 2 4.86 2 9C2 13.14 5.36 16.5 9.5 16.5C13.64 16.5 17 13.14 17 9C17 4.86 13.64 1.5 9.5 1.5ZM9.5 15C6.1925 15 3.5 12.3075 3.5 9C3.5 5.6925 6.1925 3 9.5 3C12.8075 3 15.5 5.6925 15.5 9C15.5 12.3075 12.8075 15 9.5 15ZM9.5 4.5C7.8425 4.5 6.5 5.8425 6.5 7.5H8C8 6.675 8.675 6 9.5 6C10.325 6 11 6.675 11 7.5C11 9 8.75 8.8125 8.75 11.25H10.25C10.25 9.5625 12.5 9.375 12.5 7.5C12.5 5.8425 11.1575 4.5 9.5 4.5Z" />
    </svg>
  ),
  off: (
    <svg width="24" height="23" viewBox="0 0 24 23">
      <path d="M8.16135 1.87891H6.66135V3.28891L8.16135 4.78891V1.87891ZM12.6613 6.37891V9.28891L14.0113 10.6389L14.1613 10.4889V6.37891C14.1613 5.55391 13.4863 4.87891 12.6613 4.87891V1.87891H11.1613V4.87891H8.25135L9.75135 6.37891H12.6613ZM3.75135 2.50891L2.69385 3.56641L5.16135 6.03391V10.5039L7.78635 13.1289V15.3789H11.5363V13.1289L11.8963 12.7689L15.2488 16.1214L16.3063 15.0639L3.75135 2.50891ZM10.0363 12.5064V13.8789H9.28635V12.5064L6.66135 9.86641V7.53391L10.8388 11.7114L10.0363 12.5064Z" />
    </svg>
  ),
  switch: (
    <svg width="24" height="23" viewBox="0 0 24 24">
      <path d="M5.7425 8.25L2.75 11.25L5.7425 14.25V12H11V10.5H5.7425V8.25ZM16.25 6.75L13.2575 3.75V6H8V7.5H13.2575V9.75L16.25 6.75Z" />
    </svg>
  ),
  local: (
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" />
      <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" />
    </svg>
  ),
  info: (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <path d="M14.6667 9.33366H17.3334V12.0003H14.6667V9.33366ZM14.6667 14.667H17.3334V22.667H14.6667V14.667ZM16.0001 2.66699C8.64008 2.66699 2.66675 8.64033 2.66675 16.0003C2.66675 23.3603 8.64008 29.3337 16.0001 29.3337C23.3601 29.3337 29.3334 23.3603 29.3334 16.0003C29.3334 8.64033 23.3601 2.66699 16.0001 2.66699ZM16.0001 26.667C10.1201 26.667 5.33341 21.8803 5.33341 16.0003C5.33341 10.1203 10.1201 5.33366 16.0001 5.33366C21.8801 5.33366 26.6667 10.1203 26.6667 16.0003C26.6667 21.8803 21.8801 26.667 16.0001 26.667Z" />
    </svg>
  ),
};
