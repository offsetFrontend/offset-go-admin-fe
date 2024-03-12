import React, { useId } from "react";

const CustomCheckBox = ({ labelText, isChecked, ...restProps }, ref) => {
  const id = useId();
  return (
    <div className="inline-flex items-center">
      <input
        type="checkbox"
        ref={ref}
        className="hidden"
        id={id}
        {...restProps}
      />
      <label
        htmlFor={id}
        className={`w-4 h-4 bg-gray-300 cursor-pointer rounded inline-block border-[1px] relative ${
          isChecked ? "border-blue-800" : "border-transparent"
        }`}
      >
        <span
          className={`w-2 h-2 bg-blue-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 ${
            isChecked ? "opacity-100" : ""
          } transition-opacity duration-300`}
        ></span>
      </label>
      <span className="pl-2">{labelText}</span>
    </div>
  );
};

export default React.forwardRef(CustomCheckBox);