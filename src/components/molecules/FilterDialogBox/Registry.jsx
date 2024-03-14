import React, { useState, useEffect } from "react";
import RadioGroup from "../../atoms/RadioGroup";
import { Skeleton } from "antd";
import { getAllRegistries } from "../../../utils/api/getAllRegistries";

const Registries = () => {
  const [registries, setRegistries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRegistries = async () => {
      setLoading(true);
      try {
        const registriesData = await getAllRegistries();
        setRegistries(registriesData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchRegistries();
  }, []);

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
              />
            ),
            value: registry.registryName,
          }))}
        />
      )}
    </div>
  );
};

export default Registries;
