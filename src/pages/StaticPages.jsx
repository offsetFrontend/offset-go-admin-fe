import React, {useRef} from "react";
import Button from "../components/atoms/Button";
import Table from "../components/atoms/Table";
import SearchBox from "../components/atoms/SearchBox";

const ActionButton = ({ editButton }) => {
  return (
    <Button
      color={"blue_300"}
      varient={"primary"}
      onClick={editButton}
      className={"text-blue-600 px-7 text-[9px] py-1 font-bold"}
    >
      Edit
    </Button>
  );
};

const StaticPages = () => {
    const searchRef = useRef()
  const header = ["Page", "Description", "Action"];
  const data = [
    ["12-02-2023", "Lorem@gmail.com", <ActionButton editButton={() => handleEditButoon()} />],
    ["12-02-2023", "Lorem@gmail.com", <ActionButton editButton={() => handleEditButoon()} />],
  ];

  const handleEditButoon = () => {
    console.log("Edit Button Clicked")
  }

  const handleSearch = () => {
    console.log(searchRef.current.value);
  };

  return (
    <div className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Pages</div>
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

export default StaticPages;
