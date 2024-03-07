import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import zod from "zod";
import toast from "react-hot-toast";
import loginApi from "../utils/api/login";
import { setAuthToken } from "../utils/token";

const loginForm = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (email, password) => {
    const { success } = loginForm.safeParse({ email, password });
    if (!success) {
      toast.error("Please fill in all fields correctly");
      return { success: false };
    }
    setLoading(true);
    try {
      const {
        data: { email: emailId, kyc_verified, name, token, user_type },
      } = await loginApi(email, password);
      toast.success("logged in successfullly!");
      setAuthToken(token);
      localStorage.setItem(
        "offset-go-admin-user",
        JSON.stringify({ email: emailId, kyc_verified, name, user_type })
      );
      setAuthUser({ email: emailId, kyc_verified, name, user_type });
      return { success: true };
    } catch (error) {
      toast.error(error.message);
      return { success: false };
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};
