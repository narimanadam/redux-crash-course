import React from "react";

const Button = ({ type, buttonStyle, text }) => {
  return (
    <button type={type} className={`btn btn-${buttonStyle}`}>
      {text}
    </button>
  );
};

export default Button;
