import React from "react";
import PropTypes from "prop-types";
import "./button.css";

import { radius, space, color, icon, BTN_BIG } from "../styles/DesignSystem";

/**
 * Este botão pode ser utilizado para botões largos e com texto capitalizado.
 */
export const Btn_big = ({
  backgroundColor,
  label,
  padding,
  borderRadius,
  color,
  ...props
}) => {
  return (
    <BTN_BIG
      className="BTN"
      type="button"
      style={
        backgroundColor && {
          backgroundColor,
          label,
          padding,
          borderRadius,
          color,
          border: "0px",
          width: "100%",
          maxWidth: "600px",
          maginLeft: "16px",
          marginRight: "16px",
        }
      }
      {...props}
    >
      {label}
    </BTN_BIG>
  );
};

Btn_big.propTypes = {
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Btn_big.defaultProps = {
  label: "Button",
  backgroundColor: null,
  padding: space.l,
  borderRadius: radius.m,
  onClick: undefined,
};
