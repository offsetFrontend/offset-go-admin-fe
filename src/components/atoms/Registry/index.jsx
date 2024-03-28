import React from "react";

const Registry = () => {
  const registryData1 = [
    {
      id: 1,
      registry_name: "VCS",
      ids: "#45676",
      User_name: "Offsetgo pvt. ltd.",
    },
    {
      id: 2,
      registry_name: "American Carbon registry",
      ids: "#45676",
      User_name: "Offsetgo pvt. ltd.",
    },
  ];

  const registryData2 = [
    {
      id: 1,
      registry_name: "Gold Standards",
      ids: "#45676",
      User_name: "Offsetgo pvt. ltd.",
    },
    {
      id: 2,
      registry_name: "Lorem Ipsum",
      ids: "#45676",
      User_name: "Offsetgo pvt. ltd.",
    },
  ];

  return (
    <div>
      <div className="flex">
          <div className=" mb-8 w-[50%]">
            {registryData1.map((item) => (
              <div className="mb-8">
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%]">Registry name -</div>
                  <div className="text-[14px] w-[65%] font-bold">{item.registry_name}</div>
                </div>
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%] ">ID -</div>
                  <div className="text-[14px] w-[65%] font-bold">{item.ids}</div>
                </div>
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%] ">User Name -</div>
                  <div className="text-[14px] w-[65%] font-bold">{item.User_name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[50%]">
            {registryData2.map((item) => (
              <div className="mb-8">
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%] ">Registry name -</div>
                  <div className="text-[14px] w-[65%] font-bold">
                    {item.registry_name}
                  </div>
                </div>
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%] ">ID -</div>
                  <div className="text-[14px] w-[65%] font-bold">{item.ids}</div>
                </div>
                <div className="pl-2 leading-7 flex">
                  <div className="text-[14px] w-[35%] ">User Name -</div>
                  <div className="text-[14px] w-[65%] font-bold">{item.User_name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Registry;
