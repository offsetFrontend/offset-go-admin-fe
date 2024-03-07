import React, { forwardRef } from "react";
import { ReactComponent as Search } from "../../../assets/svgs/search.svg";

const SearchBox = ({ onSearch }, ref) => {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className="flex border-2 p-1 rounded-xl px-3 w-fit bg-transparent">
        <input
          ref={ref}
          type="text"
          placeholder="Search"
          className="w-80 bg-transparent text-base outline-0 font-light placeholder:text-black placeholder:text-base placeholder:font-light"
        />
        <button type="submit">
          <Search className="w-4 ml-1" />
        </button>
      </div>
    </form>
  );
};
export default forwardRef(SearchBox);
