import React, {useRef} from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import SearchBox from "../components/atoms/SearchBox";

const ActionButton = ({ viewButton }) => {
  return (
    <Button
      color={"blue_300"}
      varient={"primary"}
      onClick={viewButton}
      className={"text-blue-600 px-7 text-[9px] py-1 font-bold"}
    >
      View
    </Button>
  );
};

const ContactUs = () => {
    const searchRef = useRef();
    const pdfRef = useRef();
  const header = [
    "Date",
    "Name",
    "Email",
    "Country",
    "Contact",
    "Message",
    "Action",
  ];
  const data = [
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
      />,
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
      />,
    ],
  ];

  const handleViewButton = () => {
    console.log("view Button Clicked");
  };
  const handleSearch = () => {
    console.log(searchRef.current.value);
  };


  return (
    <div ref={pdfRef} className=" h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Conctact</div>
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

export default ContactUs;
