import React, { useRef, useState } from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";
import Pagination from "../components/atoms/Pagination";
import FilterButton from "../components/atoms/Button/FilterButton";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

const ActionButton = (pushButton) => {
  return (
    <Button
      color={"lightblue"}
      varient={"primary"}
      onClick={pushButton}
      className={"text-blue-600 px-7 text-[9px] py-1 font-bold"}
    >
      Push
    </Button>
  );
};

const Inquire = () => {
  const searchRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

  const header = ["Date", "Name", "User", "Project Name", "Owner", "Action"];
  const tableData = [
    [
      "12-05-2023",
      "Lorem Ipsum",
      "Buyer",
      "Terapass",
      "Lorem ipsum",
      <ActionButton
        pushButton={() => {
          handlepushButton();
        }}
      />
    ],
    [
      "12-05-2023",
      "Lorem Ipsum",
      "Trader",
      "Forestry",
      "Lorem ipsum",
      <ActionButton
        pushButton={() => {
          handlepushButton();
        }}
      />
    ]
  ];

  const handlepushButton = () => {
    console.log("push Button Clicked");
  };

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Inquiry</div>
      <div className="w-full mt-8 h-[calc(90vh-2.8rem)] bg-white rounded-3xl shadow-formShadow flex flex-col">
        <div className="flex justify-between pt-5 pb-12">
          <div className="pl-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7 ">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <div className="flex-grow overflow-y-scroll">
        <Table headerData={header} data={tableData} bottomLine={false} />
        </div>
        <div className="pb-4">
          <Pagination currPage={1} onNext={() => {}} onPrev={() => {}} />
        </div>
      </div>

      {isFilterDialogOpen && (
        <FilterDialogBox
          open={isFilterDialogOpen}
          onCancel={() => setFilterDialogOpen(false)}
          onOk={() => setFilterDialogOpen(false)}
          page="Inquire"
        />
      )}
    </div>
  );
};

export default Inquire;
