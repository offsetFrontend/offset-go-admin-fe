import React, { useState } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { ReactComponent as Mail } from "../../../assets/svgs/mail.svg";
import { ReactComponent as Eye } from "../../../assets/svgs/eye.svg";
import { LuLoader2 } from "react-icons/lu";
import { useLogin } from "../../../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { success } = await login(email, password);
    if (success) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      noValidate
      className="w-full flex flex-col gap-y-6 mt-16"
      onSubmit={onSubmitHandler}
    >
      <Input
        label="Email"
        type="email"
        className="w-full"
        Icon={Mail}
        onChange={onEmailChange}
        value={email}
        autoFocus={true}
        required={true}
      />
      <Input
        label="Password"
        type="password"
        className="w-full"
        Icon={Eye}
        onChange={onPasswordChange}
        value={password}
        required={true}
      />
      <p className="text-gray-400 text-sm self-end">
        Forgot your Password?
        <span className="text-blue-800 ml-2">Reset</span>
      </p>

      <Button
        type="submit"
        color="blue"
        varient="rounded"
        className="w-fit py-2 px-16 mx-auto text-2xl tracking-widest text-white mt-12"
      >
        {loading ? <LuLoader2 className=" animate-spin" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
