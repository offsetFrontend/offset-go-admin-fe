import React, { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";
import { MinusCircleOutlined } from "@ant-design/icons";

const ProponentDetails = ({
  Country,
  // proponentDeatils,
  // form
}) => {
  const countries = Country.getAllCountries();
  const inputClass = "border-0 border-b-2 rounded-none";

  // useEffect(() => {
  //   const initialValues = proponentDeatils.map((proponent, index) => ({
  //     name: proponent.name,
  //     country_code: proponent.mobile_no.country_code,
  //     phone_number: proponent.mobile_no.phone_number,
  //     email: proponent.email,
  //   }));
  //   form.setFieldsValue({
  //     proponents_details: initialValues,
  //   });
  // }, [proponentDeatils, form]);

  return (
    <Form.List name="proponents_details">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }, index) => (
            <div className="flex" key={key}>
              <Form.Item
                {...restField}
                className="w-[calc(30%)] mr-6"
                name={[name, "name"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter name",
                  },
                ]}
              >
                <Input className={inputClass} placeholder={"Name"} />
              </Form.Item>
              <Form.Item
                {...restField}
                initialValue={"91"}
                name={[name, "country_code"]}
                className="w-[8%] mr-2"
                rules={[
                  {
                    required: true,
                    message: "Please select phone code",
                  },
                ]}
              >
                <Select
                  className="secondary_variant"
                  suffixIcon={
                    <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                  }
                  placeholder={"Select Code"}
                >
                  {countries.map((ele, index) => (
                    <Select.Option
                      key={`option_${index}`}
                      value={ele.phonecode}
                    >
                      {ele.flag} +{ele.phonecode}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                {...restField}
                className="w-[30%] pr-6"
                name={[name, "phone_number"]}
                rules={[
                  {
                    required: true,
                    message: "Please enter contact number",
                  },
                  {
                    pattern: /^[0-9]*$/,
                    message: "Please enter a valid contact number",
                  },
                ]}
              >
                <Input placeholder={"Contact no."} className={inputClass} />
              </Form.Item>
              <Form.Item
                {...restField}
                className="w-[30%] mr-2"
                name={[name, "email"]}
                rules={[
                  {
                    type: "email",
                    message: "The input is not a valid email",
                  },
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                ]}
              >
                <Input
                  className={inputClass}
                  type="email"
                  placeholder={"Email-id"}
                />
              </Form.Item>
              <button onClick={() => remove(name)} disabled={index === 0}>
                <MinusCircleOutlined className="m-2" />
              </button>
            </div>
          ))}

          <button
            onClick={() => add()}
            type="button"
            className="w-full h-7 bg-blue-200 rounded-lg text-blue-800  font-bold text-xs flex justify-center items-center"
          >
            + Add Another Proponent
          </button>
        </>
      )}
    </Form.List>
  );
};

export default ProponentDetails;
