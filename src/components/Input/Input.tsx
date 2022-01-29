import "./input.scss";
import React from "react";

interface Props {
  value: any;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: any) => void;
}

const Input = (props: Props) => {
  const { value, label, name, placeholder, type, onChange } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
