import React from "react";
import "./Button.css";

const Button = ({
  text,
  onMouseClick,
  bgColor = "primary-bg",
  textColor = "white-t",
  width = "full-width",
}) => {
  return (
    <button
      onClick={onMouseClick}
      className={`flex center rounded clickable ${bgColor} ${textColor} bold ${width} button`}
    >
      {text}
    </button>
  );
};

export default Button;
