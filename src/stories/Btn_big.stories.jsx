import { Btn_big } from "./Btn_big.jsx";

import { color, space, radius, icon } from "../styles/DesignSystem.js";

export default {
  title: "Components/Atoms/Button - Big",
  component: Btn_big,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: color,
    },
    backgroundColor: {
      control: "select",
      options: color,
    },
    borderRadius: {
      control: "radio",
      options: radius,
    },
    padding: {
      control: "select",
      options: space,
    },
  },
};

export const Primary = {
  args: {
    label: "Primary",
    color: color.mint_dark,
    backgroundColor: color.mint_mid,
  },
};

export const Secondary = {
  args: {
    label: "Secundary",
    color: color.white,
    backgroundColor: color.blue_mid,
  },
};

export const Danger = {
  args: {
    label: "Danger",
    color: color.white,
    backgroundColor: color.danger,
  },
};
