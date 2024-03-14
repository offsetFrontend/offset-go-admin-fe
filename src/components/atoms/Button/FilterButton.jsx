import React from "react";
import Button from "./index";
import { ReactComponent as Filter } from "../../../assets/svgs/filter.svg";

const FilterButton = ({ onClick }) => {
  return (
    <Button
      className="flex justify-center items-center gap-x-2 px-2 py-px h-fit"
      borderColor={"gray"}
      varient={"secondary"}
      onClick={onClick}
    >
      <Filter className="w-4 h-4" />
      <span>Filter</span>
    </Button>
  );
};

export default FilterButton;
