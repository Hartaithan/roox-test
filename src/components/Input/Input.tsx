import "./input.scss";
import React from "react";

interface Props {
  value: any;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  error: string | undefined;
  onChange: (e: any) => void;
}

const Input = (props: Props) => {
  const { value, label, name, placeholder, type, error, onChange } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        type={type}
        value={value}
        name={name}
        className={error ? "form-control invalid" : "form-control"}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
