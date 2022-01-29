import "./button.scss";
import React from "react";

interface Props {
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  text: string;
  disabled?: boolean;
  onClick?: () => void;
}

function Button(props: Props) {
  const { className, type, text, disabled, onClick } = props;
  const variableClass = className ? `button ${className}` : "button";
  return (
    <button
      className={variableClass}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
