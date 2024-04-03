import React, { useEffect } from "react";
import { Form, Input, Select, Card } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";
import { CloseOutlined } from "@ant-design/icons";

const transformData = (data) => {
  return data.map(({ isoCode, name }) => {
    if (isoCode) return { value: isoCode, label: name };
    else return { value: name, label: name };
  });
};

const ValidationBody = ({ Country, registries, verificationBodies, action , validationBodyData, form }) => {
  const countries = Country.getAllCountries();
  const inputClass = "border-0 border-b-2 rounded-none";


  useEffect(() => {
   const initialValues = validationBodyData.map((validationData) => ({
     organisation_name: validationData.organisation_name,
     name: validationData.validator_details.name,
     country_code: validationData.validator_details.mobile_no.country_code,
     phone_number: validationData.validator_details.mobile_no.phone_number,
     email: validationData.validator_details.email,
     authorized_registry_name: validationData.authorized_registry_name,
     address_line: validationData.validator_details.address_details.address_line,
     city: validationData.validator_details.address_details.city,
     country: validationData.validator_details.address_details.country,
   }))
   form.setFieldsValue({
    validation_body: initialValues
   })
  }, [validationBodyData, form])

  return (
    <Form.Item
      label={<h4 className="text-2xl font-semibold mb-2">Validation Body</h4>}
      labelCol={{ span: 24 }}
      required
      className="pt-3"
    >
      <Form.List name="validation_body">
        {(fields, { add, remove }) => (
          <div className="w-full">
            {fields.map(({ key, name, ...restField }, index) => (
              <Card
                className="mb-4"
                size="small"
                title={`Validation Body ${index + 1}`}
                key={key}
                extra={
                  <CloseOutlined
                    className={`${index === 0 && "hidden"}`}
                    onClick={() => {
                      remove(name);
                    }}
                  />
                }
              >
                <div className="w-full">
                  <Form.Item
                    {...restField}
                    name={[name, "organisation_name"]}
                    rules={[
                      {
                        required: true,
                        message: "Please select one option",
                      },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 7 }}
                  >
                    <Select
                      showSearch
                      optionFilterProp="label"
                      className="primary_variant"
                      suffixIcon={
                        <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                      }
                      placeholder={!action && "Name"}
                      disabled={action}
                      options={verificationBodies}
                    />
                  </Form.Item>
                  <h5 className="mb-2">Auditor details</h5>
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
                      <Input className={inputClass} placeholder={!action && "Name"} disabled={action} />
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
                        optionFilterProp="label"
                        className="secondary_variant"
                        suffixIcon={
                          <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                        }
                        placeholder={!action && "Select Code"}
                        disabled={action}
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
                      <Input placeholder={action && "Contact no."} className={inputClass} disabled={action} />
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
                        placeholder={!action && "Email-id"}
                        disabled={action}
                      />
                    </Form.Item>
                  </div>
                  <h5 className="mb-2">Authorized from which Registry</h5>
                  <Form.Item
                    {...restField}
                    name={[name, "authorized_registry_name"]}
                    rules={[
                      {
                        required: true,
                        message: "Please select one option",
                      },
                    ]}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 7 }}
                  >
                    <Select
                      showSearch
                      optionFilterProp="label"
                      className="primary_variant"
                      suffixIcon={
                        <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                      }
                      placeholder={!action && "Name"}
                      disabled={action}
                      options={registries}
                    />
                  </Form.Item>
                  <h5 className="mb-2">Address details</h5>
                  <div className="flex mt-2 gap-x-6">
                    <Form.Item
                      className="w-full"
                      name={[name, "address_line"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter address Line",
                        },
                      ]}
                    >
                      <Input
                        placeholder={!action && "Address line"}
                        className={inputClass}
                        disabled={action}
                      />
                    </Form.Item>

                    <Form.Item
                      {...restField}
                      className="w-full"
                      name={[name, "city"]}
                      rules={[
                        {
                          required: true,
                          message: "Please enter city",
                        },
                      ]}
                    >
                      <Input className={inputClass} placeholder={!action && "City"}  disabled={action} />
                    </Form.Item>
                    <Form.Item
                      className="w-full"
                      name={[name, "country"]}
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
                        placeholder={!action && "Country"}
                        disabled={action}
                        options={transformData(countries)}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Card>
            ))}

            <button
              onClick={() => add()}
              type="button"
              className="w-full h-7 bg-blue-200 rounded-lg text-blue-800  font-bold text-xs flex justify-center items-center"
              disabled = {action}
            >
              + Add Another Validator
            </button>
          </div>
        )}
      </Form.List>
    </Form.Item>
  );
};

export default ValidationBody;
