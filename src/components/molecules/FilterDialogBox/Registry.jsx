import React, { useState, useEffect } from "react";
import RadioGroup from "../../atoms/RadioGroup";
import { getAllRegistries } from "../../../utils/API/getAllRegistries";

const Registries = () => {
  const [registries, setRegistries] = useState([]);
  const [selectedRegistry, setSelectedRegistry] = useState(null);

  useEffect(() => {
    const fetchRegistries = async () => {
      try {
        const registriesData = await getAllRegistries();
        setRegistries(registriesData);
      } catch (error) {
        console.error("Error fetching registries:", error);
      }
    };

    fetchRegistries();
  }, []);

  const handleRadioChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected Registry:", selectedValue);
    setSelectedRegistry(selectedValue);
  };

  return (
    <div className="flex flex-wrap items-center ml-3 mb-4 ">
      <RadioGroup
        options={registries.map((registry) => ({
          label: (
            <div className="w-16 h-8 bg-cover" style={{background:`url(${registry.image})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}>
              {/* <img
                className="mr-2 " 
                src={registry.image}
                alt=""
              /> */}
              {/* {registry.registryName} */}
            </div>
          ),
          value: registry.registryName, 
        }))}
        onChange={handleRadioChange}
        value={selectedRegistry}
      />
    </div>
  );
};

export default Registries;
