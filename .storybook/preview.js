import { color } from "../src/styles/DesignSystem";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    title: 'AURA Storybook',
  },
  backgrounds: {
    default: 'blue_dark - main',
    values: [
      {
        name: 'blue_dark - main',
        value: `${color.blue_dark}`,
      },
      {
        name: 'blue_mid',
        value: `${color.blue_mid}`,
      },
      {
        name: 'white',
        value: `${color.white}`,
      },
    ],
  },
}
