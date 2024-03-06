export const getAuthToken = () => {
  return localStorage.getItem("offset-go-admin-token");
};

export const setAuthToken = (token) => {
  localStorage.setItem("offset-go-admin-token", token);
};

export const removeAuthToken = () => {
  localStorage.removeItem("offset-go-admin-token");
};
