import React, { useRef } from "react";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";

const Subscription = () => {
  const searchRef = useRef();
  const header = ["Date", "Mail"];
  const data = [
    ["12-02-2023", "Lorem@gmail.com"],
    ["12-02-2023", "Lorem@gmail.com"],
  ];
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };
  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Subscription</div>
      <div className="w-full bg-white rounded-2xl shadow-formShadow pb-12 h-[calc(100vh-6rem)]">
        <div className="flex justify-between py-5 px-8">
          <SearchBox ref={searchRef} onSearch={handleSearch} />
        </div>
        <div className="pt-6 mx-[-250px]">
          <Table headerData={header} data={data} bottomLine={false} />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
