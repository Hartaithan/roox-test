import "./input.scss";
import React from "react";

interface Props {
  value: any;
  label: string;
  name: string;
  placeholder: string;
  onChange: (e: any) => void;
}

const Textarea = (props: Props) => {
  const { value, label, name, placeholder, onChange } = props;
  return (
    <div className="form-group">
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        id={name}
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Textarea;
