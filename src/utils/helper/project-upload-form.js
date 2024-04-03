import { Country, State, City } from "country-state-city";

function getLabelForValue(array, targetValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].value === targetValue) {
      return array[i].label;
    }
  }
  return null;
}

const proponentAndDeveloperTransform = (data) =>
  data.map((item) => ({
    name: item.name,
    mobile_no: {
      phone_number: Number(item.phone_number),
      country_code: "+" + item.country_code,
    },
    email: item.email,
  }));

const validationTransform = (data, verificationBodies, registries) =>
  data.map((item) => ({
    organisation_name: getLabelForValue(
      verificationBodies,
      item.organisation_name
    ),
    authorized_registry_name: getLabelForValue(
      registries,
      item.authorized_registry_name
    ),
    validator_details: {
      name: item.name,
      mobile_no: {
        phone_number: Number(item.phone_number),
        country_code: "+" + item.country_code,
      },
      email: item.email,
      address_details: {
        address_line: item.address_line,
        city: item.city,
        country: Country.getCountryByCode(item.country).name,
      },
    },
  }));

const verifierTransform = (data, verificationBodies, registries) =>
  data.map((item) => ({
    organisation_name: getLabelForValue(
      verificationBodies,
      item.organisation_name
    ),
    authorized_registry_name: getLabelForValue(
      registries,
      item.authorized_registry_name
    ),
    verifier_details: {
      name: item.name,
      mobile_no: {
        phone_number: Number(item.phone_number),
        country_code: "+" + item.country_code,
      },
      email: item.email,
      address_details: {
        address_line: item.address_line,
        city: item.city,
        country: Country.getCountryByCode(item.country).name,
      },
    },
  }));

export const formDataTransform = (data, verificationBodies, registries) => {
  const state_name = State.getStateByCodeAndCountry(
    data.state,
    data.country
  ).name;
  const country_name = Country.getCountryByCode(data.country).name;

  const description =
    data.project_summary.trim() + " " + data.project_add_more.trim();

  const transformedData = {
    ...data,
    proponents_details: proponentAndDeveloperTransform(data.proponents_details),
    project_developer_details: proponentAndDeveloperTransform(
      data.project_developer_details
    ),
    location: {
      country: country_name,
      state: state_name,
    },
    category: {
      category_id: data.category_id,
      subcategory_id: data.subcategory_id,
    },
    no_of_credits_on_registry: Number(data.no_of_credits_on_registry),
    no_of_credits_on_offsetGo_marketPlace: Number(
      data.no_of_credits_on_offsetGo_marketPlace
    ),
    description,
    validation_body: validationTransform(
      data.validation_body,
      verificationBodies,
      registries
    ),
    verifier_body: verifierTransform(
      data.verifier_body,
      verificationBodies,
      registries
    ),
    project_dates: {
      start_date: data.start_date,
      end_date: data?.end_date,
    },
  };
  delete transformedData.terms_and_condition;
  delete transformedData.project_add_more;
  delete transformedData.project_summary;
  delete transformedData.country;
  delete transformedData.state;
  delete transformedData.subcategory_id;
  delete transformedData.category_id;
  delete transformedData.start_date;
  delete transformedData.end_date;
  return transformedData;
};

export const documentsValidator = (data) => {
  let missingFields = [];

  Object.entries(data).forEach(([field, value]) => {
    if (field === "project_videos" || field === "project_images") {
      if (value.length < 4) {
        missingFields.push(field);
      }
    } else {
      if (value.length !== 1) {
        missingFields.push(field);
      }
    }
  });

  return missingFields;
};
