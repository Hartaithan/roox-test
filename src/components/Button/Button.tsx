import "./button.scss";
import React from "react";

interface Props {
  className?: string;
  type?: "button" | "reset" | "submit" | undefined;
  text: string;
  form?: string;
  onClick?: () => void;
}

function Button(props: Props) {
  const { className, type, text, form, onClick } = props;
  const variableClass = className ? `button ${className}` : "button";
  return (
    <button
      className={variableClass}
      onClick={onClick}
      type={type || "button"}
      form={form}
    >
      {text}
    </button>
  );
}

export default Button;
