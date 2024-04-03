import { getAuthToken } from "../token";

export const autofilledUploadProjectData = async (projectId) => {
  
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/projects/api/${projectId}`,
    {
      method: "GET",
      headers: {
        "x-access-token": getAuthToken(),
      },
    }
  );
  if (!response.ok) {
    const { message } = await response.json();
    throw new Error(message);
  }
  const { data } = await response.json();
  return data;
};