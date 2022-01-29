import "./button.scss";
import React from "react";

interface Props {
  text: string;
}

function Button(props: Props) {
  const { text } = props;
  return (
    <button className="button" type="button">
      {text}
    </button>
  );
}

export default Button;
