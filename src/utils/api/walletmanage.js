import { getAuthToken } from '../token'

const walletManage = async ({ user_type, status, page, limit }) => {
  try {
    const url = new URL(`${process.env.REACT_APP_API_URL}/payments/api/wallet/payment-requests`);
    url.searchParams.append('page', page);
    url.searchParams.append('limit', limit);

    if (user_type) url.searchParams.append('user_type', user_type);
    if (status) url.searchParams.append('status', status);

    const response = await fetch(
      url.toString(),
      {
        method: 'GET',
        headers: {
          'x-access-token': getAuthToken()
        }
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

export default walletManage
