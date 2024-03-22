import DiaglogBox from "../../atoms/DiaglogBox";
import React, { useState } from "react";
import Button from "../../atoms/Button";

const MessageDialogBox = ({ open, onOk, onCancel }) => {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleOkClick = () => {
    onOk(message); 
  };
  return (
    <DiaglogBox open={open} onCancel={onCancel} width={520}>
      <div className="max-h-96 overflow-hidden overflow-y-scroll px-6 no-scrollbar py-3">
        <h1 className="text-[14px] font-normal mb-4">Title</h1>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="w-full py-2 border-b border-gray-300 focus:outline-none mb-4 "
        />
        <h1 className="text-[14px] font-normal mb-4">Remarks</h1>
        <textarea
          value={message}
          onChange={handleInputChange}
          className="w-full py-5 border border-gray-300 rounded-t mb-4"
         
          style={{ resize: "none" }}
        />
        <h1 className="text-[14px] font-normal mb-4">Documents Name</h1>
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="w-full px-0 py-2 border-b border-gray-300 focus:outline-none "
          placeholder="Document Name"
        />
        <div className="mt-4">
         <Button
            color={"lightblue"}
            varient={"primary"}
            // onClick={handleAddMessageClick}
            className={"text-blue-800 w-full text-[14px] py-1 font-medium"}
          >
            Add Document
          </Button>
          </div>
      </div>
    </DiaglogBox>
  );
};

export default MessageDialogBox;
