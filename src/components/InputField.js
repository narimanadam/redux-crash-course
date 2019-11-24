import React from "react";

const InputField = ({
  id,
  label,
  type,
  placeholder,
  value,
  name,
  handleChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
