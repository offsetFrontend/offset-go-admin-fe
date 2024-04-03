import React, { useState, useEffect } from "react";
import { Form, Input, Select, InputNumber } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";

const transformData = (data) => {
  return data.map(({ isoCode, name }) => {
    if (isoCode) return { value: isoCode, label: name };
    else return { value: name, label: name };
  });
};

const SelectAddress = ({
  label = "Address details",
  stateName,
  Country,
  State,
  City,
  form,
  requireAddressLine = true,
  requireCountry = true,
  requireState = true,
  requireCity = true,
  requirePincode = true,
  action,
  locationData,
}) => {
  const { addressLine, country, state, city, pincode } = stateName;
  let countries = Country.getAllCountries();
  const inputClass = "border-0 border-b-2 rounded-none";
  const [countryData] = useState(countries);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  const [selctedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    if (locationData && locationData.country && locationData.state) {
      const initialValues = {
        country: locationData.country,
        state: locationData.state,
      };
      form.setFieldsValue(initialValues);
    }
  });

  useEffect(() => {
    if (requireState) {
      (async () => {
        await setStateData(State.getStatesOfCountry(selctedCountry));
        await form.setFieldsValue({
          [state]: undefined,
          [city]: undefined,
        });
      })();
    }
  }, [selctedCountry]);

  useEffect(() => {
    if (requireCity) {
      (async () => {
        await setCityData(City.getCitiesOfState(selctedCountry, selectedState));
        await form.setFieldsValue({
          [city]: undefined,
        });
      })();
    }
  }, [selectedState]);

  return (
    <Form.Item
      label={label}
      required={true}
      labelCol={{ span: 24 }}
      className="mb-0"
    >
      <div className="flex mt-2">
        {requireAddressLine && (
          <div className="w-[calc(100%/3)] pr-4">
            <Form.Item
              className="w-full"
              name={addressLine}
              rules={[
                {
                  required: true,
                  message: "Please enter address Line",
                },
              ]}
            >
              <Input placeholder="Address line" className={inputClass} />
            </Form.Item>
          </div>
        )}
        {requireCountry && (
          <div className="w-[calc(100%/3)] pr-4">
            <Form.Item
              className="w-full"
              name={country}
              rules={[
                {
                  required: true,
                  message: "Please select country",
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="label"
                className="primary_variant"
                suffixIcon={
                  <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                }
                onChange={(e) => setSelectedCountry(e)}
                placeholder={!action && "Country"}
                options={transformData(countryData)}
                disabled={action}
              />
            </Form.Item>
          </div>
        )}
        {requireState && (
          <Form.Item
            className="w-[calc(100%/3)]"
            name={state}
            rules={[
              {
                required: true,
                message: "Please select state",
              },
            ]}
          >
            <Select
              showSearch
              optionFilterProp="label"
              onChange={(e) => setSelectedState(e)}
              className="primary_variant"
              suffixIcon={
                <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
              }
              placeholder={!action && "State"}
              options={transformData(stateData)}
              disabled={action}
            />
          </Form.Item>
        )}
      </div>
      <div className="flex">
        {requireCity && (
          <div className="w-[calc(100%/3)] pr-4">
            <Form.Item
              className="w-full"
              name={city}
              rules={[
                {
                  required: true,
                  message: "Please select city",
                },
              ]}
            >
              <Select
                showSearch
                optionFilterProp="label"
                className="primary_variant"
                suffixIcon={
                  <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                }
                placeholder={"City"}
                options={transformData(cityData)}
              />
            </Form.Item>
          </div>
        )}
        {requirePincode && (
          <div className="w-[calc(100%/3)] pr-4">
            <Form.Item
              className="w-full"
              name={pincode}
              rules={[
                {
                  required: true,
                  message: "Please enter pincode",
                },
              ]}
            >
              <InputNumber
                controls={false}
                placeholder="Pincode"
                className={inputClass}
              />
            </Form.Item>
          </div>
        )}
      </div>
    </Form.Item>
  );
};

export default SelectAddress;
