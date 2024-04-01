import React from "react";
import Button from "../Button";

const Pagination = ({ currPage, onNext, onPrev, totalPages }) => {
  return (
    <div className="flex justify-center mt-8 relative px-12">
      <Button
        onClick={onPrev}
        varient={"primary"}
        className={`text-blue-800 border-[1px] border-blue-800 px-7 bg-blue-300 text-[9px] py-1.5 font-bold w-44 rounded-md h-7 ${
          currPage === 1 && " cursor-not-allowed"
        }`}
      >
        Previous Page
      </Button>

      <Button
        onClick={onNext}
        color={"blue"}
        varient={"primary"}
        className={`text-white px-7 ml-4 text-[9px] py-1.5 font-bold w-44 rounded-md h-7 ${
          currPage === totalPages && "cursor-not-allowed"
        }`}
      >
        Next Page
      </Button>

      <div className="absolute right-32 top-0 flex gap-x-1">
        <div className="text-xs bg-[#d9d9d969] w-6 h-6 flex justify-center items-center rounded-md border-[1px] border-[#80808043]">
          {currPage}
        </div>
        <div className="flex flex-col gap-y-1">
          <button onClick={onNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
            >
              <path d="M5.5 0L10.2631 8.25H0.73686L5.5 0Z" fill="#D9D9D9" />
            </svg>
          </button>

          <button onClick={onPrev}>
            <svg
              className=" rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
            >
              <path d="M5.5 0L10.2631 8.25H0.73686L5.5 0Z" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
