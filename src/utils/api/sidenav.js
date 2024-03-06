import { getAuthToken } from "../token";

const sidenav = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/admin/sidenav`,
      {
        headers: {
          "x-access-token": getAuthToken(),
        },
      }
    );
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export default sidenav;
