import React, { useState, useEffect } from "react";
import Button from "../components/atoms/Button";
import getPaymentOrder from "../utils/api/getPaymentOrder";
import updatePaymentOrder from "../utils/api/updatePaymentOrder";
import { useParams } from "react-router-dom";
import Status from "../components/molecules/FilterDialogBox/Status";
import { Skeleton } from "antd";

const WalletTransactionDetails = () => {
  const { reqId } = useParams();
  const [paymentOrder, setPaymentOrder] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [addAmount, setAddAmount] = useState("");
  const [bankCharges, setBankCharges] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [status, setStatus] = useState(paymentOrder ? paymentOrder.status : "");
  const [remarks, setRemarks] = useState("");

  const fetchPaymentOrder = async (reqId) => {
    try {
      const data = await getPaymentOrder(reqId);
      console.log("Fetched payment order data:", data);
      const paymentOrderData = data.data.paymentOrder.docs[0];
      const {
        _id,
        transaction_type,
        requested_amount,
        status,
        user_email,
        user_type,
        user_name
      } = paymentOrderData;
      setPaymentOrder({
        _id,
        transaction_type,
        requested_amount,
        status,
        user_email,
        user_type,
        user_name
      });
      setStatus(status);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching payment order: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaymentOrder(reqId);
  }, [reqId]);

  useEffect(() => {
    if (paymentOrder && paymentOrder.status) {
      setStatus(paymentOrder.status);
    }
  }, [paymentOrder]);

  const handleSaveChanges = async () => {
    try {
      const requestData = {
        status,
        settled_amount: addAmount
        // bankCharges,
        // miscellaneous,
        // remarks
      };
      await updatePaymentOrder(reqId, requestData);
      console.log("Payment order updated successfully!");
    } catch (error) {
      console.error("Error updating payment order: ", error);
    }
  };

  if (loading) {
    return (
      <div className="flex w-full flex-col gap-y-4 p-4">
        <Skeleton.Button block={true} active={true} />
        <Skeleton.Button block={true} active={true} />
        <Skeleton.Button block={true} active={true} />
        <Skeleton.Button block={true} active={true} />
      </div>
    );
  }
  return (
    <div className="h-full w-full p-6">
      <div className="text-[1.75rem] font-bold mb-4">
        Wallet Transaction Details
      </div>
      <div className=" pt-8 gap-y-4 mt-8 h-fit bg-white rounded-3xl shadow-formShadow pb-8">
        <div className="grid grid-cols-2">
          <div className=" w-2/3 text-[14px]">
            <h1 className="text-2xl font-medium pl-16">Transaction Details</h1>
            <div className="pl-16">
              <div className="flex my-2 justify-between">
                <p className="font-normal">ID-</p>
                <span className="font-bold">{paymentOrder._id}</span>
              </div>
              <div className="flex my-2 justify-between">
                <p className="font-normal">Type- </p>
                <span className="text-blue-800 font-bold">
                  {paymentOrder.transaction_type}
                </span>
              </div>
              <div className="flex my-2 justify-between">
                <p className="font-normal">Amount-</p>
                <span className="font-bold">
                  {paymentOrder.requested_amount}
                </span>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Status-</p>
                <div>
                  <Status value={status} onChange={setStatus} />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Add Amount-</p>
                <div>
                  {" "}
                  <span className="font-bold px-4">INR</span>
                  <input
                    type="text"
                    value={addAmount}
                    placeholder="Amount"
                    className="w-24 border-b border-black border-opacity-50 focus:outline-none mb-4 "
                    onChange={(e) => setAddAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Bank Charges- </p>
                <div>
                  {" "}
                  <span className="font-bold px-4">INR</span>
                  <input
                    type="text"
                    value={bankCharges}
                    placeholder="Amount"
                    className="w-24 border-b border-black border-opacity-50 focus:outline-none mb-4 "
                    onChange={(e) => setBankCharges(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-normal">Miscellaneous- </p>
                <div>
                  <span className="font-bold px-4">INR</span>
                  <input
                    type="text"
                    value={miscellaneous}
                    placeholder="Amount"
                    className="w-24 border-b border-black border-opacity-50 focus:outline-none mb-4 "
                    onChange={(e) => setMiscellaneous(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-2/3">
            <h1 className="text-2xl font-medium pl-8">User Details</h1>
            <div className="pl-8 text-[14px]">
              <div className="flex justify-between">
                {" "}
                <p className="my-1 font-normal">Name-</p>
                <span className="font-bold">{paymentOrder.user_name}</span>
              </div>
              <div className="flex justify-between">
                <p className="my-1 font-normal">Type-</p>
                <span className="font-bold text-blue-800">
                  {paymentOrder.user_type}
                </span>
              </div>
              <div className="flex justify-between">
                <p className="my-1 font-normal">Email-</p>
                <span className="font-bold">{paymentOrder.user_email}</span>
              </div>
              <div className="flex pt-12">
                <p className="my-1 font-normal pr-4">UTR No.- </p>

                <input
                  type="text"
                  value={miscellaneous}
                  className="w-52 border-b border-black border-opacity-50 focus:outline-none mb-4 "
                  onChange={(e) => setMiscellaneous(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col pl-16 pt-4">
            Remarks
            <textarea
              className="border border-black border-opacity-50 my-4 w-full rounded-md"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>
        </div>
        <div className="pl-16 pb-6">
          <h1 className="text-2xl font-medium pb-4">Documents</h1>
          <div className="flex">
            <p className="font-medium text-[14px]">Screenshot</p>

            <div className="pl-8">
              {" "}
              <Button
                color={"blue"}
                varient={"primary"}
                // onClick={handleViewButtonClick}
                className={"text-white px-4 text-[9px] py-1 font-medium"}
              >
                View
              </Button>
            </div>
          </div>
        </div>
        <div className="flex col-span-2 pl-8 justify-center items-center">
          <Button
            color={"blue"}
            varient={"primary"}
            onClick={handleSaveChanges}
            className={"text-white px-20 text-[14px] py-1 font-normal"}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WalletTransactionDetails;
