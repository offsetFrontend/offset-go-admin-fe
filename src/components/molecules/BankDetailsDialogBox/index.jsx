import React, { useState } from "react";
import DiaglogBox from "../../atoms/DiaglogBox";

const BankDetailsDialogBox = ({ open, onOk, onCancel }) => {

  const [bankDetailsDialogOpen, setbankDetailsDialogOpen] = useState(true);

  const handleBankDetailsDialogBoxClick = () => {
    setbankDetailsDialogOpen(false);
};

  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [branch, setBranch] = useState("");
  const [ifscCode, setIFSCCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBankName("");
    setAccountNumber("");
    setBranch("");
    setIFSCCode("");
  };
  return (
    <div>
      <DiaglogBox open={open} onCancel={onCancel} width={520}>
        <div className="">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4"
          >
            <h2 className="text-3xl font-bold mb-10">Edit Bank Details</h2>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="bankName"
              >
                Bank Name
              </label>
              <input
                className="border-b border-current w-full px-3 focus:outline-none focus:shadow-outline"
                id="bankName"
                type="text"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
            <div className="mb-8">
              <label
                className="block text-gray-700 text-sm mb-6"
                htmlFor="accountNumber"
              >
                Account Number
              </label>
              <input
                className="border-b border-current w-full px-3 focus:outline-none focus:shadow-outline"
                id="accountNumber"
                type="text"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-between mb-8">
              <div className="">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="branch"
                >
                  Branch
                </label>
                <input
                  className="border-b border-current px-3 focus:outline-none focus:shadow-outline"
                  id="branch"
                  type="text"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </div>
              <div className="">
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="ifscCode"
                >
                  IFSC
                </label>
                <input
                  className="border-b border-current  px-3 focus:outline-none focus:shadow-outline"
                  id="ifscCode"
                  type="text"
                  value={ifscCode}
                  onChange={(e) => setIFSCCode(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 text-white text-[9px] py-3 px-4 w-[35%] mr-2 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit
              </button>
              <button
                className="bg-red-200 text-[#C90202] text-[9px] py-3 px-4 w-[35%] rounded"
                type="submit"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </DiaglogBox>
    </div>
  );
};

export default BankDetailsDialogBox;
