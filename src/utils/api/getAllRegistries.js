export const getAllRegistries = async () => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/api/registry/getAllRegistires`
        );
        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message);
        }
        return await response.json();
    } catch (error) {
        return error;
    }
};
