import { getAuthToken } from "../token";

export const uploadProject = async (info) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}/projects/api/create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": getAuthToken(),
                },
                body: JSON.stringify(info),
            }
        );
        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message);
        }
        const { data } = await response.json();
        return data;
    } catch (err) {
        throw new Error(err);
    }
};
