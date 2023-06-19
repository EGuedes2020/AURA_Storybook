// .storybook/YourTheme.js

//import { color } from "../src/styles/DesignSystem"; --- estava a dar erro às vezes desta maneira

import { create } from "@storybook/theming/create";

import logo_h from '../public/logo_h.png'; //se n fosse assim, n dava

export default create({
  base: "dark",
  // Typography
  fontBase: "Readex Pro",
  fontCode: '"Inter", sans-serif',
  
  brandTitle: "AURA",
  //   brandUrl: 'https://example.com',
  brandImage: logo_h,
  //   brandTarget: '_self',  
  
  colorPrimary: "#023047",
  colorSecondary: "#1CE4BF",
  
  // UI
  appBg: "#023047",
  appContentBg: "#023047",
  appBorderColor: "#20495D",
  appBorderRadius: 8,
  
  // Text colors
  textColor: "#FCFCFC",
  textInverseColor: "#07362D",
  textMutedColor: "#CCD6DA",
  
  // Toolbar default and active colors
  barTextColor: "#CCD6DA",
  barSelectedColor: "#FCFCFC",
  barBg: "#20495D",
  
  // Form colors
  inputBg: "#20495D",
  inputBorder: "#FCFCFC",
  inputTextColor: "#FCFCFC",
  inputBorderRadius: 8,
  
  //Outros
  booleanBg: "#20495D",
  booleanSelectedBg: "#1CE4BF",
  
  buttonBg: "#1CE4BF",



  //ESTÁ A DAR ERRO, APESAR DE JÁ TER FUNCIONADO ASSIM ANTES
  // colorPrimary: `${color.blue_dark}`,
  // colorSecondary: `${color.mint_mid}`,
  
  // // UI
  // appBg: `${color.blue_dark}`,
  // appContentBg: `${color.blue_dark}`,
  // appBorderColor: `${color.blue_mid}`,
  // appBorderRadius: 8,
  
  // // Text colors
  // textColor: `${color.white}`,
  // textInverseColor: `${color.mint_dark}`,
  // textMutedColor: `${color.blue_light}`,
  
  // // Toolbar default and active colors
  // barTextColor: `${color.blue_light}`,
  // barSelectedColor: `${color.white}`,
  // barBg: `${color.blue_mid}`,
  
  // // Form colors
  // inputBg: `${color.blue_mid}`,
  // inputBorder: `${color.white}`,
  // inputTextColor: `${color.white}`,
  // inputBorderRadius: 8,
  
  // //Outros
  // booleanBg: `${color.blue_mid}`,
  // booleanSelectedBg: `${color.mint_mid}`,

  // buttonBg: `${color.mint_mid}`,

  
});
