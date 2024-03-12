import React, { useState, useEffect } from "react";
import RadioGroup from "../../atoms/RadioGroup";
import { Skeleton } from "antd";
import { getAllRegistries } from "../../../utils/api/getAllRegistries";

const Registries = () => {
  const [registries, setRegistries] = useState([]);
  const [selectedRegistry, setSelectedRegistry] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchRegistries = async () => {
      try {
        const registriesData = await getAllRegistries();
        setRegistries(registriesData);
        setLoading(false);
      } catch (error) {
        error("Error fetching registries:", error);
      }
    };

    fetchRegistries();
  }, []);

  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
   
    setSelectedRegistry(selectedValue);
  };

  return (
    <div className="flex flex-wrap items-center ml-3 mb-4">
      {loading ? ( 
       <div className="flex flex-col gap-y-4 w-full">
       <Skeleton.Button block={true} active={true} />
       <Skeleton.Button block={true} active={true} />
     
     </div>
      ) : (
        <RadioGroup
          options={registries.map((registry) => ({
            label: (
              <div
                className="w-16 h-8 bg-cover mt-2"
                style={{
                  background: `url(${registry.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            ),
            value: registry.registryName,
          }))}
          onChange={handleRadioChange}
          value={selectedRegistry}
        />
      )}
    </div>
  );
};

export default Registries;