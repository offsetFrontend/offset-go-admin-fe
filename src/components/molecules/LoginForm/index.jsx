import React, { useState } from "react";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { ReactComponent as Mail } from "../../../assets/svgs/mail.svg";
import { ReactComponent as Eye } from "../../../assets/svgs/eye.svg";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <form
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
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
