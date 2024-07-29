import React from "react";

const Button = ({ value, type, onClick, bgColor }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`mt-2 text-white p-2 rounded-lg min-w-32 transition-all duration-500 delay-300 ease-in  ${
        bgColor
          ? "bg-" + `${bgColor}` + "-500"
          : "bg-blue-500 transition-all duration-500 delay-300 ease-in"
      }`}
    >
      {value}
    </button>
  );
};

export default Button;
