import { getAuthToken } from "../token";

export const getMarketplaceUsers = async (page, limit) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user?page=${page}&limit=${limit}`,
      {
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
  } catch (error) {
    throw error;
  }
};
