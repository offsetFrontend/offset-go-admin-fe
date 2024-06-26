export const fetchProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/projects/api`
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
