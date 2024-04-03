import { getAuthToken } from "../token";

export const uploadDocument = async (file, file_name, current, number) => {
  try {
    const extention = file.name.split(".");
    const file_name_new =
      file_name +
      `${number > 1 ? "_" + current : ""}.${extention[extention.length - 1]}`;
    const renamedFile = new File([file], file_name_new, { type: file.type });
    const formData = new FormData();
    formData.append("document", renamedFile);
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/upload-document`,
      {
        method: "POST",
        headers: {
          "x-access-token": getAuthToken(),
        },

        body: formData,
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    throw new Error(error);
  }
};
