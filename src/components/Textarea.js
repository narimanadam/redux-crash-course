import React from "react";

const Textarea = ({ id, label, value, name, placeholder, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <textarea
        className="form-control"
        id={id}
        rows="3"
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
