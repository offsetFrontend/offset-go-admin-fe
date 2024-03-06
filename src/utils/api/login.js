const login = async (email, password) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/user/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, user_type: "admin" }),
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

export default login;
