import React, { useEffect } from "react";
import { autofilledUploadProjectData} from  '../api/autofilledUploadProjectData';
import dayjs from "dayjs";

const AutoFillComponent = ({ projectId, form, setProponentDetails, setDevelopersData, setCategoryData, setLocationData, setValidationBodyData, setVerificationBodyData, setProjectDocumentsData }) => {
  useEffect(() => {
    const autoFilledData = async (projectId) => {
      try {
        const autoFilledProjectDetail = await autofilledUploadProjectData(projectId);
        const startDate = dayjs(autoFilledProjectDetail.project_dates.start_date);
        const projectRegistrationDate = dayjs(autoFilledProjectDetail.project_registration_date);
        const projectIssuanceDate = dayjs(autoFilledProjectDetail.project_issuance_date);
        const endDate = dayjs(autoFilledProjectDetail.project_dates.end_date);

        form.setFieldsValue({
          project_name: autoFilledProjectDetail.project_name,
          project_id: autoFilledProjectDetail.project_id,
          registry_name: autoFilledProjectDetail.registry_name._id,
          project_summary: autoFilledProjectDetail.description,
          projectStillGoingOn: autoFilledProjectDetail.projectStillGoingOn,
          crediting_period: autoFilledProjectDetail.crediting_period,
          project_scale: autoFilledProjectDetail.project_scale,
          no_of_credits_on_registry: autoFilledProjectDetail.no_of_credits_on_registry,
          no_of_credits_on_offsetGo_marketPlace: autoFilledProjectDetail.no_of_credits_on_offsetGo_marketPlace,
          type_of_credit: autoFilledProjectDetail.type_of_credit,
          start_date: startDate,
          end_date: endDate,
          project_registration_date: projectRegistrationDate,
          project_issuance_date: projectIssuanceDate,
        });

        setProponentDetails(autoFilledProjectDetail.proponents_details);
        setDevelopersData(autoFilledProjectDetail.project_developer_details);
        setCategoryData(autoFilledProjectDetail.category);
        setLocationData(autoFilledProjectDetail.location);
        setValidationBodyData(autoFilledProjectDetail.validation_body);
        setVerificationBodyData(autoFilledProjectDetail.verifier_body);
        setProjectDocumentsData(autoFilledProjectDetail.project_documents);
      } catch (error) {
        console.log(error);
      }
    };

    autoFilledData(projectId);
  }, [projectId, form, setProponentDetails, setDevelopersData, setCategoryData, setLocationData, setValidationBodyData, setVerificationBodyData, setProjectDocumentsData]);

  return null;
};

export default AutoFillComponent;
