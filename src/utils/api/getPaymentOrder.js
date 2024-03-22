import { getAuthToken } from '../token'

const getPaymentOrder = async (reqId) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/payments/api/wallet/payment-request?req_id=${reqId}`,
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

export default getPaymentOrder
