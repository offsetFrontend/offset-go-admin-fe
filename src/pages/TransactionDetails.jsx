import React ,{useState}from "react";
import Table from "../components/atoms/Table";
import Button from "../components/atoms/Button";
import MessageDialogBox from "../components/molecules/DialogBoxes/message";

const TransactionDetails = () => {
    const [messageDialogOpen, setMessageDialogOpen] = useState(false);
  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-blue-100" : "bg-white";
  };

  const transactionData = [
    { label: "#y23dffdfa", value: "22-10-2022" },
    { label: "Buyer", value: "Lorem Ipsum" },
    { label: "Seller", value: "John Doe" },
    { label: "Credit Type", value: "Partially" },
    { label: "Payment Method", value: "Net Banking" },
    { label: "No of Tokens", value: "120" },
    { label: "Amount per Token", value: "$10" },
    { label: "Total Amount", value: "$1200" },
    { label: "Platform Charges(5%)", value: "$60" },
    { label: "Status", value: "Bid Accepted" }
  ];
  const projectData = [
    { label: "Project Owner", value: "John Doe" },
    { label: "Project Name", value: "Forestry" },
    { label: "Project ID", value: "2456345#" },
    { label: "No of Tokens", value: "120" },
    { label: "Type of Credit", value: "Gold" },
    { label: "Category", value: "Renewable" }
  ];
  const buyerData = [
    { label: "Name", value: "John Doe" },
    { label: "Location", value: "India" },
    { label: "Bid Amount", value: "$20" }
  ];
  const buyer2Data = [
    { label: "Name", value: "John Doe" },
    { label: "Location", value: "India" },
    { label: "Bid Amount", value: "$20" }
  ];

  const sellerData = [
    { label: "Name", value: "Lorem Ipsum" },
    { label: "Location", value: "India" }
  ];
  const handleAddMessageClick = () => {
    setMessageDialogOpen(true);
};

  return (
    <div className="h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">Transaction Details</div>
      <div className="grid grid-cols-2 pt-8 gap-y-4 mt-8 h-fit bg-white rounded-3xl shadow-formShadow pb-8">
        <div>
          <h1 className="text-2xl font-medium pl-8">Transaction Details</h1>
          {transactionData.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className="w-1/3 text-[14px]">{item.label} -</span>
              <span className="w-1/3 text-[14px] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-medium pl-8">Project Details</h1>
          {projectData.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className="w-1/3 text-[14px]">{item.label} -</span>
              <span className="w-1/3 text-[14px] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-medium pl-8">Buyer</h1>
          {buyerData.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className="w-1/3 text-[14px]">{item.label} -</span>
              <span className="w-1/3 text-[14px] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-medium pl-8">Seller</h1>
          {sellerData.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className="w-1/3 text-[14px]">{item.label} -</span>
              <span className="w-1/3 text-[14px] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-medium pl-8">Buyer 2</h1>
          {buyer2Data.map((item, index) => (
            <div key={index} className={`${getRowColor(index)} pl-8 py-1 flex`}>
              <span className="w-1/3 text-[14px]">{item.label} -</span>
              <span className="w-1/3 text-[14px] font-bold">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="flex col-span-2 pt-8">
          <div className="w-1/2 pl-8">
            <h1 className="text-2xl font-medium">Buyer Communication</h1>
            <h1 className="font-bold">
              Offset Go -{" "}
              <span className="text-[14px] font-normal text-gray-500">
                Please Share all the registry related Documents
              </span>
            </h1>
            <h1 className="font-bold mb-8">
              Buyer -{" "}
              <span className="text-[14px] font-normal text-gray-500">
                Sure
              </span>
            </h1>
            <Button
              color={"lightblue"}
              varient={"primary"}
              onClick={handleAddMessageClick}
              className={"text-blue-800 px-20 text-[14px] py-1 font-medium"}
            >
              Add Message
            </Button>
          </div>
          <div className="w-1/2  pl-8 ">
          <h1 className="text-2xl font-medium">Seller Communication</h1>
          <h1 className="font-bold">
            Offset Go -{" "}
            <span className="text-[14px] font-normal text-gray-500">
              Please Share all the registry related Documents{" "}
            </span>
          </h1>
          <h1 className="font-bold mb-8">
            Seller -{" "}
            <span className="text-[14px] font-normal text-gray-500">Sure</span>
          </h1>
          <Button
            color={"lightblue"}
            varient={"primary"}
            onClick={handleAddMessageClick}
            className={"text-blue-800 px-20 text-[14px] py-1 font-medium"}
          >
            Add Message
          </Button>
        </div>
        </div>
      </div>
      <MessageDialogBox
                open={messageDialogOpen}
                onCancel={() => setMessageDialogOpen(false)}
                onOk={() => {
                    // Handle OK action if needed
                    setMessageDialogOpen(false);
                }}
            />
    </div>
  );
};

export default TransactionDetails;
