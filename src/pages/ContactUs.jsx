import React, { useRef, useState } from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";
import arrow from "../assets/svgs/downarrow.svg";
import Pagination from "../components/atoms/Pagination";
import FilterButton from "../components/atoms/Button/FilterButton";
import FilterDialogBox from "../components/molecules/FilterDialogBox";

const ActionButton = ({ viewButton }) => {
  return (
    <Button
      color={"blue_300"}
      varient={"primary"}
      onClick={viewButton}
      className={"text-blue-800 px-7 text-[9px] py-1 font-bold"}
    >
      View
    </Button>
  );
};

const ContactUs = () => {
  const searchRef = useRef();
  const pdfRef = useRef();
  const [isFilterDialogOpen, setFilterDialogOpen] = useState(false);

  const header = [
    "Date",
    "Name",
    "Email",
    "Country",
    "Contact",
    "Message",
    "Action"
  ];
  const tableData = [
    [
      "12-05-2023",
      "Lorem Ipsum",
      "Lorem@gmail.com",
      "India",
      "+91 951223657",
      "lorem ipsum contact sit amet....",
      <ActionButton
        viewButton={() => {
          handleViewButton();
        }}
      />
    ],
    [
      "12-05-2023",
      "Lorem Ipsum",
      "Lorem@gmail.com",
      "India",
      "+91 951223657",
      "lorem ipsum contact sit amet....",
      <ActionButton
        viewButton={() => {
          handleViewButton();
        }}
      />
    ]
  ];

  const handleViewButton = () => {
    console.log("view Button Clicked");
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div ref={pdfRef} className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Contact</div>
      <div className="w-full mt-8 h-[calc(90vh-2.8rem)] bg-white rounded-3xl shadow-formShadow flex flex-col">
        <div className="flex justify-between pt-5 pb-4">
          <div className="pl-8">
            <SearchBox ref={searchRef} onSearch={handleSearch} />
          </div>
          <div className="pr-7">
            <FilterButton onClick={() => setFilterDialogOpen(true)} />
          </div>
        </div>
        <div className="flex justify-end gap-5 pb-10 pr-6">
          <Button
            color={"blue_800"}
            varient={"primary"}
            className={
              "text-white flex justify-center items-center px-9 text-[9px] py-2 font-bold"
            }
          >
            <img src={arrow} alt="SVG icon" className="w-2.5 h-2.5 mr-1" />
            Pdf
          </Button>
          <Button
            color={"blue_800"}
            varient={"primary"}
            className={
              "text-white flex justify-center items-center px-8 text-[9px] py-2 font-bold"
            }
          >
            <img src={arrow} alt="icon" className="w-2.5 h-2.5 mr-2" />
            Excel
          </Button>
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
          page="ContactUs"
        />
      )}
    </div>
  );
};

export default ContactUs;
