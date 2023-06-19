import React from "react";
import PropTypes from "prop-types";
import "./button.css";

import { BTN_SM, radius, space, color, icon } from "../styles/DesignSystem";

/**
 * Este botão pode ser utilizado para o botão FAB e outros botões com icones e texto não capitalizado.
 */
export const Btn_sm = ({
  backgroundColor,
  label,
  fill,
  icon,
  padding,
  borderRadius,
  color,
  marginRight,
  ...props
}) => {
  return (
    <BTN_SM
      className="BTN"
      type="button"
      style={
        backgroundColor && {
          backgroundColor,
          label,
          fill,
          icon,
          padding,
          borderRadius,
          color,
          border: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      }
      {...props}
    >

      <span
        style={
          marginRight && {
            marginRight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "24px",
            width: "24px",
            viewBox: "0 0 0 0",
          }
        }
      >
        {icon}
      </span>

      {label}
    </BTN_SM>
  );
};

Btn_sm.propTypes = {
    
  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,
};

Btn_sm.defaultProps = {
  label: "Button",
  backgroundColor: null,
  fill: color.mint_dark,
  icon: icon.add,
  padding: space.l,
  marginRight: space.m,
  borderRadius: radius.m,
  onClick: undefined,
};
