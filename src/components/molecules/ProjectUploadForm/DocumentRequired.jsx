import React, { useEffect } from "react";
import Upload from "./Upload";

const documentsList = [
  {
    name: "project_design",
    label: "Project Design Document (PDD)",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "proof_of_validation_contraction",
    label: "Proof of validation contracting",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "legal_compliance",
    label: "Legal compliance documentation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "monitoring_report",
    label: "Monitoring report",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "validation_representation",
    label: "Validation representation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "verification_report",
    label: "Verification report",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "issuance_report",
    label: "Issuance report",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "SDG_certification",
    label: "SDG Certificate",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "project_videos",
    label: "Project Videos (At least 4)",
    number: 4,
    allowedFileTypes: ["video/mp4"],
  },
  {
    name: "project_images",
    label: "Project Images (At least 4)",
    number: 4,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "issuance_representation",
    label: "Issuance representation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "verification_representation",
    label: "Verification representation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "registration_representation",
    label: "Registration representation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "validation_report",
    label: "Validation report",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "environmental_impact_assessment",
    label: "Environmental impact assessment document",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "evidence_project_ownership",
    label: "Evidence of Project ownership/proponents",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
  {
    name: "listing_representation",
    label: "Listing representation",
    number: 1,
    allowedFileTypes: [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "application/pdf",
    ],
  },
];

const DocumentRequired = ({ setDocuments, documents, projectDocumentsData, action , form }) => {

  useEffect(() => {
    if(projectDocumentsData){
      const initialValues = {
        project_design: projectDocumentsData.project_design,
        proof_of_validation_contraction: projectDocumentsData.proof_of_validation_contraction,
        legal_compliance: projectDocumentsData.legal_compliance,
        monitoring_report: projectDocumentsData.monitoring_report,
        validation_representation: projectDocumentsData.validation_representation,
        verification_report: projectDocumentsData.verification_report,
        issuance_report: projectDocumentsData.issuance_report,
        SDG_certification: projectDocumentsData.SDG_certification,
        project_videos: projectDocumentsData.project_videos,
        project_images: projectDocumentsData.project_images,
        issuance_representation: projectDocumentsData.issuance_representation,
        verification_representation: projectDocumentsData.verification_representation,
        registration_representation: projectDocumentsData.registration_representation,
        validation_report: projectDocumentsData.validation_report,
        environmental_impact_assessment: projectDocumentsData.environmental_impact_assessment,
        evidence_project_ownership: projectDocumentsData.evidence_project_ownership,
        listing_representation: projectDocumentsData.listing_representation,
      }
      form.setFieldsValue(initialValues)
      console.log("project Data", initialValues)
    }
  }, [projectDocumentsData, form])
  return (
    <div className="">
      <ol className="list-none flex">
        <div className="w-1/2 pr-8">
          {documentsList
            .slice(0, 9)
            .map(({ name, label, number, allowedFileTypes }, index) => (
              <li key={name}>
                <Upload
                  name={name}
                  label={label}
                  number={number}
                  index={index}
                  uploadList={documents[name]}
                  setDocuments={setDocuments}
                  allowedFileTypes={allowedFileTypes}
                />
              </li>
            ))}
        </div>

        <div className="w-1/2 pl-2">
          {documentsList.slice(9).map(({ name, label, number, allowedFileTypes }, index) => (
            <li key={name}>
              <Upload
                name={name}
                label={label}
                number={number}
                index={index}
                uploadList={documents[name]}
                setDocuments={setDocuments}
                allowedFileTypes={allowedFileTypes}             
              />
            </li>
          ))}
        </div>
      </ol>
    </div>
  );
};

export default DocumentRequired;
