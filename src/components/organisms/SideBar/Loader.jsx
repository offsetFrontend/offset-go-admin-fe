import React from "react";
import { Skeleton } from "antd";

const loader = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      {Array.from({ length: 10 }, (_, index) => (
        <Skeleton.Button key={index} block={true} active={true} />
      ))}
    </div>
  );
};

export default loader;
