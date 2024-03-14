import React from "react";
import RadioGroup from "../../atoms/RadioGroup";

const radioOptions = [
  { label: "New", value: "New" },
  { label: "Existing", value: "Existing" },
];

const ProjectType = () => {
  return (
    <div className="flex w-full gap-8 ml-3 mb-4">
      <RadioGroup options={radioOptions} />
    </div>
  );
};

export default ProjectType;
