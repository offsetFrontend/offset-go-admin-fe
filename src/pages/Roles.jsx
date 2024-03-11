import React, { useRef } from "react";
import SearchBox from "../components/atoms/SearchBox";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";

const ActionButton = ({ editButton, deleteButton }) => {
  return (
    <div className="flex justify-center gap-3">
      <Button
        color={"blue"}
        varient={"primary"}
        onClick={editButton}
        className={"text-white w-20 h-6 text-[9px] font-bold"}
      >
        Edit
      </Button>
      <Button
        color={"red"}
        varient={"primary"}
        onClick={deleteButton}
        className={"text-red-400 w-20 h-6 text-[9px] font-bold"}
      >
        Delete
      </Button>
    </div>
  );
};

const Roles = () => {
  const searchRef = useRef();
  const header = ["Role", "Description", "Action"];
  const data = [
    [
      "Project Team",
      "Team will manage the projects part",
      <ActionButton
        editButton={() => {
          handleEditButton();
        }}
        deleteButton={() => {
          handleDeleteButton();
        }}
      />,
    ],
    [
      "Reports Team",
      "Team will manage the projects part",
      <ActionButton
        editButton={() => {
          handleEditButton();
        }}
        deleteButton={() => {
          handleDeleteButton();
        }}
      />,
    ],
  ];

  const handleEditButton = () => {
    console.log("Edit Button Clicked")
  }
  
  const handleDeleteButton = () => {
    console.log("Delete Button Clicked")
  }

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">
        Roles & Responsibility
      </div>
      <div className="w-full bg-white rounded-2xl shadow-formShadow pb-12 h-[calc(100vh-6rem)]">
        <div className="flex justify-between py-5 px-8">
          <SearchBox ref={searchRef} onSearch={handleSearch} />
        </div>
        <div className="pt-6">
          <Table headerData={header} data={data} bottomLine={false} />
        </div>
      </div>
    </div>
  );
};

export default Roles;