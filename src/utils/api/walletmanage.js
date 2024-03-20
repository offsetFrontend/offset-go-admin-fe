import { getAuthToken } from '../token'

const walletManage = async (queryParams) => {
    try {
      const queryString = new URLSearchParams(queryParams).toString();
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/payments/api/wallet/payment-requests?${queryString}`,
        {
          method: 'GET',
          headers: {
            'x-access-token': getAuthToken()
          }
        }
      )
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message)
      }
      return data
    } catch (error) {
      throw error
    }
  }
  
  export default walletManage
  
