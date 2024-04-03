import React, { useEffect } from "react";
import { Form, Input, Select, Card, Checkbox } from "antd";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";
import { CloseOutlined } from "@ant-design/icons";

const transformData = (data) => {
  return data.map(({ isoCode, name }) => {
    if (isoCode) return { value: isoCode, label: name };
    else return { value: name, label: name };
  });
};

const VerifierBody = ({
  Country,
  sameAsAbove,
  onSameAsAbove,
  registries,
  verificationBodies,
  varificationBodyData,
  form,
  action,
}) => {
  const countries = Country.getAllCountries();
  const inputClass = "border-0 border-b-2 rounded-none";

  useEffect(() => {
    const initialValues = varificationBodyData.map((varificationData) => ({
      organisation_name: varificationData.organisation_name,
      name: varificationData.verifier_details.name,
      country_code: varificationData.verifier_details.mobile_no.country_code,
      phone_number: varificationData.verifier_details.mobile_no.phone_number,
      email: varificationData.verifier_details.email,
      authorized_registry_name: varificationData.authorized_registry_name,
      address_line:
        varificationData.verifier_details.address_details.address_line,
      city: varificationData.verifier_details.address_details.city,
      country: varificationData.verifier_details.address_details.country,
    }));
    form.setFieldsValue({
      verifier_body: initialValues,
    });
  }, [varificationBodyData, form]);

  return (
    <Form.Item
      label={
        <div className="flex items-center">
          <h4 className="text-2xl font-semibold mb-2">Verification Body</h4>
          <Checkbox
            className="ml-4 h-fit"
            checked={sameAsAbove}
            onChange={(e) => onSameAsAbove(e.target.checked)}
          >
            <p className="font-normal text-sm text-black align-text-bottom">
              Same as above
            </p>
          </Checkbox>
        </div>
      }
      labelCol={{ span: 24 }}
      required
      className="pt-3"
    >
      <Form.List name="verifier_body">
        {(fields, { add, remove }) => (
          <div className="w-full">
            {fields.map(({ key, name, ...restField }, index) => (
              <Card
                className="mb-4"
                size="small"
                title={`Verification Body ${index + 1}`}
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
                      disabled={!action ? sameAsAbove : action}
                      className="primary_variant"
                      suffixIcon={
                        <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                      }
                      placeholder={!action && "Name"}
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
                      <Input
                        disabled={!action ? sameAsAbove : action}
                        className={inputClass}
                        placeholder={!action && "Name"}
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
                        disabled={!action ? sameAsAbove : action}
                        className="secondary_variant"
                        suffixIcon={
                          <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                        }
                        placeholder={!action && "Select Code"}
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
                         disabled={!action ? sameAsAbove : action}
                        placeholder={!action && "Contact no."}
                        className={inputClass}
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
                        disabled={!action ? sameAsAbove : action}
                        className={inputClass}
                        type="email"
                        placeholder={!action && "Email-id"}
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
                      disabled={!action ? sameAsAbove : action}
                      className="primary_variant"
                      suffixIcon={
                        <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                      }
                      placeholder={!action && "Name"}
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
                         disabled={!action ? sameAsAbove : action}
                        placeholder={!action && "Address line"}
                        className={inputClass}
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
                      <Input
                         disabled={!action ? sameAsAbove : action}
                        className={inputClass}
                        placeholder={!action && "City"}
                      />
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
                        disabled={!action ? sameAsAbove : action}
                        className="primary_variant"
                        suffixIcon={
                          <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                        }
                        placeholder={!action && "Country"}
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
              + Add Another Verifier
            </button>
          </div>
        )}
      </Form.List>
    </Form.Item>
  );
};

export default VerifierBody;
