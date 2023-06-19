import { Btn_sm } from "./Btn_sm.jsx";

import { color, space, radius, icon } from "../styles/DesignSystem.js";

export default {
  title: "Components/Atoms/Button - Small",
  component: Btn_sm,
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
    marginRight: {
      control: "select",
      options: space,
    },
    fill: {
      control: "select",
      options: color,
    },
    icon: {
      control: "select",
      options: icon,
    },
  },
};

export const Primary = {
  args: {
    label: "Primary",
    color: color.mint_dark,
    fill: color.mint_dark,
    backgroundColor: color.mint_mid,
  },
};

export const Secondary = {
  args: {
    label: "Secundary",
    color: color.white,
    fill: color.white,
    backgroundColor: color.blue_mid,
    icon: icon.edit,
  },
};

export const Danger = {
  args: {
    label: "Danger",
    color: color.white,
    fill: color.white,
    backgroundColor: color.danger,
    icon: icon.logout,
  },
};
