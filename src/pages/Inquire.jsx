import React, {useRef} from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";

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
    const searchRef = useRef()
  const header = ["Date", "Name", "User", "Project Name", "Owner", "Action"];
  const data = [
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
      />,
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
      />,
    ],
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

export default Inquire;
