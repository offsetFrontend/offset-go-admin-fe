import React from "react";
import { Radio } from "antd";
import "./style.css";
const RadioGroup = ({ options, labelSize,...restProps }, ref) => {
  return (
    <div className="custom-radio-buttons">
      <Radio.Group
        options={options}
        buttonStyle="solid"
        ref={ref}
        {...restProps}
      />
    </div>
  );
};

export default React.forwardRef(RadioGroup);
