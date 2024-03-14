import React from "react";

const Button = ({
  varient,
  color,
  borderColor,
  className,
  children,
  ...restProps
}) => {
  const varients = {
    rounded: "rounded-full",
    primary: "rounded-lg",
    secondaryxl: "rounded-xl",
    secondary: "rounded-md",
  };

  const borderVarients = {
    blue: "border-2 border-blue-800",
    green: "border-2 border border-green-600",
    gray: "border-1 border border-gray-800",
  };

  const colorVariants = {
    white: "bg-white",
    blue: "bg-blue-800 hover:bg-blue-700",
    lightblue: "bg-blue-200",
    blue_300: "bg-blue-300",
    gray: "bg-gray-800",
    red: "bg-red-200",
  };

  return (
    <button
      type="button"
      {...restProps}
      className={`${varients[varient]} ${borderVarients[borderColor]} ${colorVariants[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
