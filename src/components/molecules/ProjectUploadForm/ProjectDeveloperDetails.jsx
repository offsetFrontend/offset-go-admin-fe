import React, { useEffect } from "react";
import { Form, Input, Select } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";
import { MinusCircleOutlined } from "@ant-design/icons";

const ProjectDeveloper = ({
  Country,
  // developersData,
  // action,
  // form
}) => {
  const countries = Country.getAllCountries();
  const inputClass = "border-0 border-b-2 rounded-none";

  // useEffect(() => {
  //   const initialValues = developersData.map((developer) => ({
  //     name: developer.name,
  //     country_code: developer.mobile_no.country_code,
  //     phone_number: developer.mobile_no.phone_number,
  //     email: developer.email,
  //   }));
  //   form.setFieldsValue({
  //     project_developer_details: initialValues,
  //   });
  // }, [developersData, form]);
  return (
    <Form.List name="project_developer_details">
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
                <Input
                  className={inputClass}
                  placeholder={"Name"}
                  // disabled={action}
                />
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
                  // disabled={action}
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
                <Input
                  placeholder={"Contact no."}
                  className={inputClass}
                  // disabled={action}
                />
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
                  // disabled={action}
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
            + Add Another Developer
          </button>
        </>
      )}
    </Form.List>
  );
};

export default ProjectDeveloper;
