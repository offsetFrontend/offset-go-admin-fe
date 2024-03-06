import React from "react";
import LoginForm from "../components/molecules/LoginForm";

const Login = () => {
  return (
    <div className="flex w-full bg-white">
      <div className="shrink-0 grow-0 basis-[45%] h-screen rounded-lg p-3">
        <div
          className="shrink-0 grow-0 basis-[45%] h-full rounded-lg pt-52 px-24"
          style={{
            backgroundImage: 'url("/images/portal.png")',
            backgroundSize: "cover",
          }}
        >
          <h2 className="text-5xl font-medium text-center">Welcome</h2>
          <p className="text-xl text-center leading-10">To Offsetgo</p>
          <p className="text-xl text-center">
            World's first Blockchain based carbon trading platform
          </p>
        </div>
      </div>

      <div className="shrink-0 grow-0 basis-[55%]">
        <div className="shrink-0 grow-0 flex flex-col items-center px-32 pt-16 pb-4">
          <img
            src="https://offsetgo.s3.ap-south-1.amazonaws.com/assets/Images/Offsetgo-logo.png"
            alt="offset-go-logo"
            draggable={false}
          />

          <h2 className="text-4xl mt-6">Log in Account</h2>
          <p className="text-sm text-gray-500 mt-4">
            Please Log in to your Offsetgo account
          </p>
          <div className="pt-12 w-full">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
