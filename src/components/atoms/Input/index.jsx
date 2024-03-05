import React, { useState, useId } from "react";
import { ReactComponent as Eye } from "../../../assets/svgs/eye.svg";
import { ReactComponent as EyeOff } from "../../../assets/svgs/eye-off.svg";

const styles = {
  primary: {
    label: "block text-gray-400 mb-4",
    input: "outline-0 w-full bg-transparent disabled:bg-transparent",
  },
  secondary: {
    label: "pt-4 block text-sm text-formLabel w-fit",
    input:
      "w-full h-8 border-gray-300 text-gray-400 bg-transparent disabled:bg-transparent outline-0",
  },
};

const Input = (
  {
    label = "",
    type = "text",
    Icon,
    error,
    className,
    variant = "primary",
    ...restProps
  },
  ref
) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleHandler = () => {
    setShowPassword(!showPassword);
  };

  const DisplayIcon =
    type !== "password" ? (
      Icon ? (
        <Icon className="h-4 w-4 text-gray-400" />
      ) : undefined
    ) : !showPassword ? (
      <Eye className="h-4 w-4 text-gray-400" onClick={toggleHandler} />
    ) : (
      <EyeOff className="h-4 w-4 text-gray-400" onClick={toggleHandler} />
    );

  const id = useId();

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className={styles[variant].label}>
          {label}
          {error && (
            <span className="ml-4 text-red-600">*{error?.message}</span>
          )}
        </label>
      )}
      <div className="flex border-gray-300 border-b-2 w-full">
        <input
          type={type !== "password" ? type : showPassword ? "text" : "password"}
          id={id}
          ref={ref}
          autoComplete="yes"
          className={styles[variant].input}
          {...restProps}
        />
        {DisplayIcon && DisplayIcon}
      </div>
    </div>
  );
};

export default React.forwardRef(Input);
