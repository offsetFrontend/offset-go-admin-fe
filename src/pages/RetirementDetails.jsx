import React from "react";
import Button from "../components/atoms/Button";
import Badge from "../components/atoms/Badge";
import { ReactComponent as SideArrow } from "../assets/svgs/sideArrow.svg";
import { useNavigate } from "react-router-dom";

const RetirementDetails = () => {
  const navigate = useNavigate();

  const redirectToRetirements = () => {
    navigate("/retirements");
  };

  const getRowColor = (index) => {
    return index % 2 === 0 ? "bg-blue-100" : "bg-white";
  };

  const StatusButton = ({ statusText }) => {
    return (
      <Badge varient={statusText}>
        <div className="flex justify-center items-center w-36 text-xs h-5 ">
          {statusText}
        </div>
      </Badge>
    );
  };

  const RetirementMockData = {
    creditDetails: {
      ProjectName: "Forestry",
      Registry: <span className="text-blue-800">Verra</span>,
      NumberOfCredits: "700",
      Category: "Nature-based Credits",
      Type: (
        <Badge varient="Gold">
          <div className="flex justify-center text-white font-normal items-center w-12 text-xs h-4 ">
            Gold
          </div>
        </Badge>
      ),
      Status: <StatusButton statusText="in-process" />,
    },
    owner: {
      Name: "Lorem Lpsum",
      Registry: <span className="text-blue-800">Verra</span>,
      RegistryUsername: "Lorem@verra",
      RegistryID: "#5678",
      EmailId: "Lorem@email.com",
    },
    RetirementDetails: {
      NumberOfCreditsRetired: 800,
      NameOfBeneficiaryOrganization: "YP pvt. ltd.",
      Goal: "Akhand Bharat",
      Time: "29-02-2023 - 01-01-2024",
    },
    DocumentData: {
      doc_one: "Acknowledgment",
      doc_two: "Certificate",
      doc_three: "OG Certificate",
      doc_four: "Document 1",
      doc_five: "Document 2",
    },
  };

  return (
    <div className="h-full w-full p-6">
      <div
        className="flex mb-4"
        onClick={redirectToRetirements}
        style={{ cursor: "pointer" }}
      >
        <SideArrow className="w-10 h-10" />
        <span className="text-[1.75rem] font-bold ml-3 leading-9">
          Retirement
        </span>
      </div>
      <div className=" pt-8 gap-y-4 mt-8 h-screen bg-white rounded-3xl shadow-formShadow pb-8">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-2xl font-medium pl-8">Credit Details</h1>
            <div className=" mt-2">
              {Object.entries(RetirementMockData.creditDetails).map(
                ([label, value], index) => (
                  <div
                    key={index}
                    className={`${getRowColor(index)} pl-8 py-1 flex`}
                  >
                    <span className="w-1/3 text-[14px]">{label} -</span>
                    <span className="w-1/3 text-[14px] font-bold">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-medium pl-8">Owner</h1>
            <div className=" mt-2">
              {Object.entries(RetirementMockData.owner).map(
                ([label, value], index) => (
                  <div
                    key={index}
                    className={`${getRowColor(index)} pl-8  py-1 flex`}
                  >
                    <span className="w-1/3 text-[14px]">{label} -</span>
                    <span className="w-1/3 text-[14px] font-bold">{value}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-full  mt-10">
          <h1 className="text-2xl font-medium pl-8">Retirement Details</h1>
          <div className=" mt-2">
            {Object.entries(RetirementMockData.RetirementDetails).map(
              ([label, value], index) => (
                <div
                  key={index}
                  className={`${getRowColor(index)} pl-8 py-1 flex`}
                >
                  <span className="w-1/4 text-[14px]">{label} -</span>
                  <span className="w-1/2 text-[14px] font-bold">{value}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full mt-10">
          <h1 className="text-2xl font-medium pl-8">Documents</h1>
          <div className=" mt-2">
            {Object.entries(RetirementMockData.DocumentData).map(
              ([key, value], index) => (
                <div
                  key={index}
                  className={`${getRowColor(index)} pl-8 py-1 flex`}
                >
                  <span className="w-1/5 text-[14px]">{value} </span>
                  <Button
                    className="bg-blue-800 rounded flex justify-center items-center px-3 py-1"
                    borderColor={"blue"}
                    variant={"secondary"}
                  >
                    <span className="text-white text-[9px] font-bold">
                      Upload
                    </span>
                  </Button>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 ">
          <Button
            className="bg-blue-800 rounded flex justify-center items-center px-20 py-2"
            borderColor="blue"
            variant="secondary"
          >
            <span className="text-white text-xs font-bold leading-4">
              Save Changes
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RetirementDetails;
