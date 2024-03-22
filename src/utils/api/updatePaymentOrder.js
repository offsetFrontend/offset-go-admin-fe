import { getAuthToken } from '../token';

const updatePaymentOrder = async (reqId, requestData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/payments/api/wallet/update-request/${reqId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': getAuthToken()
        },
        body: JSON.stringify(requestData)
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

export default updatePaymentOrder;
