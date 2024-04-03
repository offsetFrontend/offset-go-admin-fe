import React, { useContext, useEffect, useState } from "react";
import { TopLoaderContext } from "../../../context/TopLoader/index";
import { DatePicker, Form, Input, Select, Checkbox, Skeleton } from "antd";

import RadioGroup from "../../atoms/RadioGroup";
import SelectAddress from "../SelectAddress";
import { Country, State, City } from "country-state-city";
import Button from "../../atoms/Button";
import ProjectDeveloperDetails from "./ProjectDeveloperDetails";
import ProponentDetails from "./ProponentDetails";
import CategoryAndSubCategory from "./CategoryAndSubCategory";
import { ReactComponent as DownIcon } from "../../../svgs/dropdown_icon.svg";
// import ValidationBody from "./ValidationBody";
// import VerifierBody from "./VerifierBody";
import SdgContribution from "../../atoms/SdgContribution";
import DocumentRequired from "./DocumentRequired";
import { getAllCategories } from "../../../utils/api/getAllCategories";
import { getAllRegistries } from "../../../utils/api/getAllRegistries";
import { getAllVerificationBodies } from "../../../utils/api/getAllVerificationBodies";
import {
  documentsValidator,
  formDataTransform,
} from "../../../utils/helper/project-upload-form";
import { uploadProject } from "../../../utils/api/uploadProject";
import toast from "react-hot-toast";
// import AcceptPopUp from "../AcceptPopUp";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
// import Line from "../../atoms/HorizontalLine";
import { autofilledUploadProjectData } from "../../../utils/api/autofilledUploadProjectData";
import dayjs from "dayjs";
// import ActionFields from "./ActionFields";
import AutoFillComponent from "../../../utils/helper/auto-filled-data";

const { TextArea } = Input;

const dateFormatList = ["DD/MM/YYYY", "DD-MM-YYYY"];
const inputClass = "border-0 border-b-2 rounded-none";

const defaultDocumentsState = {
  project_design: [],
  proof_of_validation_contraction: [],
  legal_compliance: [],
  monitoring_report: [],
  validation_representation: [],
  verification_report: [],
  issuance_report: [],
  SDG_certification: [],
  project_videos: [],
  listing_representation: [],
  evidence_project_ownership: [],
  environmental_impact_assessment: [],
  validation_report: [],
  registration_representation: [],
  verification_representation: [],
  issuance_representation: [],
  project_images: [],
};

const ProjectUploadForm = () => {
  const { loadingRef } = useContext(TopLoaderContext);
  const [form] = Form.useForm();
  const [searchParams] = useSearchParams();
  const action = searchParams.get("actionRequired");
  const projectId = searchParams.get("projectId");
  const [sameAsAbove, setSameAsAbove] = useState(false);
  const [SDG_selected, setSDG_selected] = useState([]);
  const [categories, setCategories] = useState([]);
  const [registries, setRegistries] = useState([]);
  const [verificationBodies, setVerificationBodies] = useState([]);
  const [documents, setDocuments] = useState(defaultDocumentsState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [proponentDetails, setProponentDetails] = useState([]);
  const [developersData, setDevelopersData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [validationBodyData, setValidationBodyData] = useState([]);
  const [varificationBodyData, setVerificationBodyData] = useState([]);
  const [projectDocumentsData, setProjectDocumentsData] = useState([]);
  const [showEndDate, setShowEndDate] = useState(false);

  const documentRequire = [
    {
      label: "1. Auditing Report",
      name: "auditing_report",
    },
    {
      label: "2. Verification Report",
      name: "verification_report",
    },
    {
      label: "3. Auditor Report",
      name: "tax_returns",
    },
  ];

  const navigate = useNavigate();

  const onSameAsAbove = (value) => {
    setSameAsAbove(value);
  };

  const inputClass = "border-0 border-b-2 rounded-none";

  useEffect(() => {
    try {
      const fetchCategories = async () => {
        setLoading(true);
        const promise1 = getAllCategories();
        const promise2 = getAllRegistries();
        const promise3 = getAllVerificationBodies();
        const data = await Promise.all([promise1, promise2, promise3]);
        setLoading(false);
        setCategories(data[0]);
        setRegistries(
          data[1].map(({ _id, registryName }) => {
            return { value: _id, label: registryName };
          })
        );
        setVerificationBodies(
          data[2].map(({ _id, name }) => {
            return { value: _id, label: name };
          })
        );
      };
      fetchCategories();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   autoFilledData(projectId);
  // }, [projectId]);

  // const autoFilledData = async (projectId) => {
  //   try {
  //     const autoFilledProjectDetail = await autofilledUploadProjectData(
  //       projectId
  //     );
  //     const startDate = dayjs(autoFilledProjectDetail.project_dates.start_date);
  //     const projectRegistrationDate = dayjs(
  //       autoFilledProjectDetail.project_registration_date
  //     );
  //     const projectIssuanceDate = dayjs(
  //       autoFilledProjectDetail.project_issuance_date
  //     );
  //     const endDate = dayjs(autoFilledProjectDetail.project_dates.end_date);

  //     form.setFieldsValue({
  //       project_name: autoFilledProjectDetail.project_name,
  //       project_id: autoFilledProjectDetail.project_id,
  //       registry_name: autoFilledProjectDetail.registry_name._id,
  //       project_summary: autoFilledProjectDetail.description,
  //       projectStillGoingOn: autoFilledProjectDetail.projectStillGoingOn,
  //       crediting_period: autoFilledProjectDetail.crediting_period,
  //       project_scale: autoFilledProjectDetail.project_scale,
  //       no_of_credits_on_registry:
  //         autoFilledProjectDetail.no_of_credits_on_registry,
  //       no_of_credits_on_offsetGo_marketPlace:
  //         autoFilledProjectDetail.no_of_credits_on_offsetGo_marketPlace,
  //       type_of_credit: autoFilledProjectDetail.type_of_credit,
  //       start_date: startDate,
  //       end_date: endDate,
  //       project_registration_date: projectRegistrationDate,
  //       project_issuance_date: projectIssuanceDate,
  //     });
  //     console.log(
  //       "Start Date :",
  //       autoFilledProjectDetail.project_dates.start_date
  //     );
  //     setProponentDetails(autoFilledProjectDetail.proponents_details);
  //     setDevelopersData(autoFilledProjectDetail.project_developer_details);
  //     setCategoryData(autoFilledProjectDetail.category);
  //     setLocationData(autoFilledProjectDetail.location);
  //     setValidationBodyData(autoFilledProjectDetail.validation_body);
  //     setVerificationBodyData(autoFilledProjectDetail.verifier_body);
  //     setProjectDocumentsData(autoFilledProjectDetail.project_documents);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (sameAsAbove) {
      const data = form.getFieldValue("validation_body");
      form.setFieldsValue({ verifier_body: data });
      form.setFieldsValue();
    }
  }, [sameAsAbove, form]);

  const onValidatorChange = () => {
    if (sameAsAbove) {
      const data = form.getFieldValue("validation_body");
      form.setFieldsValue({ verifier_body: data });
    }
  };

  const onSubmit = async (data) => {
    const missingFields = documentsValidator(documents);
    if (missingFields.length > 0) {
      toast.error(
        `Please upload ${missingFields[0]} with required number of uploads`
      );
      return;
    }
    const transformedData = formDataTransform(
      data,
      verificationBodies,
      registries
    );

    if (SDG_selected.length < 1) {
      toast.error("Select atleast one SDG");
      return;
    }

    const documentsTransformedData = {};

    for (const [key, value] of Object.entries(documents)) {
      if (value.length === 1) {
        documentsTransformedData[key] = value[0].url;
      } else {
        documentsTransformedData[key] = value.map((item) => item.url);
      }
    }

    try {
      loadingRef.current.continuousStart();
      await uploadProject({
        ...transformedData,
        SDG_contribution: SDG_selected,
        project_documents: documentsTransformedData,
      });
      setSuccess(true);
      form.resetFields();
      setSDG_selected([]);
      setSameAsAbove(false);
      setDocuments(defaultDocumentsState);
    } catch (err) {
      toast.error(err.message);
    }
    loadingRef.current.complete();
  };

  return (
    <>
    <AutoFillComponent
        projectId={projectId}
        form={form}
        setProponentDetails={setProponentDetails}
        setDevelopersData={setDevelopersData}
        setCategoryData={setCategoryData}
        setLocationData={setLocationData}
        setValidationBodyData={setValidationBodyData}
        setVerificationBodyData={setVerificationBodyData}
        setProjectDocumentsData={setProjectDocumentsData}
      />
    <div className="bg-gray-100 w-full h-full p-6">
      <div className="text-3xl font-bold mb-4">Project Details</div>
      <Form
        onFinish={onSubmit}
        form={form}
        noValidate
        onValuesChange={onValidatorChange}
        initialValues={{
          proponents_details: [{}],
          project_developer_details: [{}],
          validation_body: [{}],
          verifier_body: [{}],
        }}
        className="kyc_form font-spaceGrotesk w-full pl-8 pr-8 bg-white rounded-2xl shadow-formShadow pb-12 h-[calc(100vh-6rem)] overflow-y-scroll no-scrollbar"
      >
        <div className="pr-44">
          <h3 className="text-2xl font-medium text-[#252525] mb-2 mt-4">
            Project details
          </h3>
          <Form.Item
            name="registry_name"
            label="Registry Name"
            rules={[
              {
                required: true,
                message: "Please select one option",
              },
            ]}
            labelCol={{ span: 24 }}
          >
            {loading ? (
              <Skeleton.Input active={true} size={"large"} block={true} />
            ) : (
              <RadioGroup
                options={registries}
                className="font-medium text-2xl max-w-4xl"
              />
            )}
          </Form.Item>
          <div className="flex">
            <Form.Item
              label="Project Name"
              className="font-normal w-1/2"
              name="project_name"
              rules={[
                {
                  required: true,
                  message: "Please enter project name",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 22 }}
            >
              <Input className={inputClass} />
            </Form.Item>

            <Form.Item
              label="Project ID"
              className="font-normal w-1/2"
              name="project_id"
              rules={[
                {
                  required: true,
                  message: "Please enter project name",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input className={inputClass} />
            </Form.Item>
          </div>

          <Form.Item
            label={"Proponent/Operator details"}
            labelCol={{ span: 24 }}
            required
          >
            <ProponentDetails
              Country={Country}
              // proponentDeatils={proponentDetails}
              // form={form}
            />
          </Form.Item>

          <Form.Item
            label={"Project Developer"}
            labelCol={{ span: 24 }}
            required
          >
            <ProjectDeveloperDetails
              Country={Country}
              // developersData={developersData}
              // action={action ? true: false}
              // form={form}
            />
          </Form.Item>

          <div className="flex">
            <Form.Item
              label="Project Summary"
              className="font-normal w-1/2"
              name="project_summary"
              rules={[
                {
                  required: true,
                  message: "Please enter project summary",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 22 }}
            >
              <div className="text-area">
                <TextArea
                  showCount
                  maxLength={600}
                  className="border-2 focus-within:shadow-none rounded-lg"
                  style={{ height: 116, resize: "none" }}
                  disabled={action}
                />
              </div>
            </Form.Item>

            <Form.Item
              label="Add more"
              className="font-normal w-1/2"
              name="project_add_more"
              rules={[
                {
                  required: true,
                  message: "Please enter add more",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <div className="text-area">
                <TextArea
                  showCount
                  maxLength={600}
                  className="border-2 focus-within:shadow-none rounded-lg"
                  style={{ height: 116, resize: "none" }}
                />
              </div>
            </Form.Item>
          </div>

          <div className="w-[70%]">
            <CategoryAndSubCategory
              form={form}
              setCategories={setCategories}
              categories={categories}
              action={action ? true : false}
              categoryData={categoryData}
            />
          </div>

          <div className="w-[60%]">
            <SelectAddress
              label="Location Details"
              stateName={{
                country: "country",
                state: "state",
              }}
              Country={Country}
              State={State}
              City={City}
              form={form}
              requireAddressLine={false}
              requireCity={false}
              requirePincode={false}
              action={action}
              locationData={locationData}
            />
          </div>

          <div className="flex w-[70%] gap-x-12">
            <Form.Item
              name={"start_date"}
              label="Project Start Date"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please select date",
                },
              ]}
            >
              <DatePicker
                className={`p-1 w-44 ${inputClass}`}
                format={dateFormatList}
                // disabled={action}
                placeholder={"Select date"}
              />
            </Form.Item>

            <Form.Item
              name={"project_registration_date"}
              label="Project Registration Date"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please select date",
                },
              ]}
            >
              <DatePicker
                className={`p-1 w-44 ${inputClass}`}
                format={dateFormatList}
                placeholder={"Select date"}
                // disabled={action}
              />
            </Form.Item>
          </div>

          <Form.Item
            name={"project_issuance_date"}
            label="Project Issuance Date"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please select date",
              },
            ]}
          >
            <DatePicker
              className={`p-1 w-44 ${inputClass}`}
              format={dateFormatList}
              placeholder={!action && "Select date"}
              disabled={action}
            />
          </Form.Item>

          <div className="flex w-[70%] gap-x-12">
            <Form.Item
              name={"projectStillGoingOn"}
              label="Is project Still Ongoing?"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please select one option",
                },
              ]}
            >
              <RadioGroup
                onChange={(e) => setShowEndDate(!e.target.value)}
                options={[
                  { label: "Yes", value: true },
                  { label: "No", value: false },
                ]}
                className="font-medium"
                // disabled={true}
              />
            </Form.Item>

            {showEndDate && (
              <Form.Item
                name={"end_date"}
                label="Project End Date"
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Please select date",
                  },
                ]}
              >
                <DatePicker
                  className={`p-1 w-44 ${inputClass}`}
                  format={dateFormatList}
                  placeholder={"Select date"}
                  // disabled={action}
                />
              </Form.Item>
            )}
          </div>

          <div className="flex gap-x-4">
            <Form.Item
              className="w-52"
              name={"crediting_period"}
              label="Crediting Period"
              rules={[
                {
                  required: true,
                  message: "Please select crediting period",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 22 }}
            >
              <Select
                showSearch
                optionFilterProp="label"
                className="primary_variant"
                suffixIcon={
                  <DownIcon className="w-[11px] h-[5px] text-[#808080]" />
                }
                placeholder={!action && "Select"}
                options={Array.from({ length: 100 }, (_, index) => ({
                  label: index + 1,
                  value: index + 1,
                }))}
                disabled={action}
              />
            </Form.Item>

            <Form.Item
              name={"project_scale"}
              label="Project Scale"
              className="w-60"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: "Please select one option",
                },
              ]}
            >
              <RadioGroup
                options={[
                  { label: "Projects", value: "projects" },
                  {
                    label: "Large Projects",
                    value: "large projects",
                  },
                ]}
                className="font-medium"
                disabled={action}
              />
            </Form.Item>

            <Form.Item
              name={"no_of_credits_on_registry"}
              label={"Total available Credits on Registry"}
              className="w-72"
              rules={[
                {
                  required: true,
                  message: "Please enter",
                },
                {
                  pattern: /^[0-9]*$/,
                  message: "Invalid input",
                },
              ]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 12 }}
            >
              <Input className={inputClass} disabled={action} />
            </Form.Item>
          </div>

          <Form.Item
            name={"no_of_credits_on_offsetGo_marketPlace"}
            label={"No. of Credits want to list on OffsetGo marketplace"}
            rules={[
              {
                required: true,
                message: "Please enter",
              },
              {
                pattern: /^[0-9]*$/,
                message: "Invalid input",
              },
            ]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 4 }}
          >
            <Input className={inputClass} disabled={action} />
          </Form.Item>

          <Form.Item
            name={"type_of_credit"}
            label="Credit Type"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please select one option",
              },
            ]}
          >
            <RadioGroup
              options={[
                { label: "Transferable", value: "transferable" },
                {
                  label: "Non-Transferable/ Retirable",
                  value: "non-transferable",
                },
              ]}
              className="font-medium"
              disabled={action}
            />
          </Form.Item>

          <Form.Item label="SDG Contribution" labelCol={{ span: 24 }} required>
            <SdgContribution
              selected={SDG_selected}
              setValue={setSDG_selected}
            />
          </Form.Item>

          <h5 className="text-2xl font-medium mb-6 pt-6">
            VVB (Validation/Verification Body)
          </h5>

          {/* <ValidationBody
            Country={Country}
            registries={registries}
            verificationBodies={verificationBodies}
            validationBodyData={validationBodyData}
            // action={action ? true: false}
            // form={form}
          />

          <VerifierBody
            Country={Country}
            onSameAsAbove={onSameAsAbove}
            sameAsAbove={sameAsAbove}
            registries={registries}
            verificationBodies={verificationBodies}
            varificationBodyData={varificationBodyData}
            // action={action ? true: false}
            // form={form}
          /> */}
        </div>

        <h5 className="text-2xl font-medium mb-6 pt-6">Document Required</h5>
        <DocumentRequired
          documents={documents}
          setDocuments={setDocuments}
          projectDocumentsData={projectDocumentsData}
          action={action}
          form={form}
        />

        <Form.Item
          name="terms_and_condition"
          valuePropName="checked"
          className="mt-8"
          rules={[
            {
              required: true,
              message: "Please accept the terms and conditions.",
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Please accept the terms and conditions."),
            },
          ]}
        >
          <Checkbox>
            <p className="font-normal text-sm">
              Accept{" "}
              <span className="text-blue-800">
                Terms & Conditions, Policies & terms of use{" "}
              </span>
              to proceed
            </p>
          </Checkbox>
        </Form.Item>
        <Button
          type="submit"
          color="blue"
          varient="primary"
          className="w-full h-12 px-16 mx-auto text-2xl text-white mt-12"
        >
          Submit
        </Button>
      </Form>
      {/* <AcceptPopUp
        open={success}
        isRequiredColor={"green"}
        isRequiredCancelButton={false}
        okButtonText={"Go back"}
        title={"Project uploaded Successfully!"}
        onCancel={() => setSuccess(false)}
        onOk={() => navigate("/projects")}
      /> */}
    </div>
    </>
  );
};

export default ProjectUploadForm;
