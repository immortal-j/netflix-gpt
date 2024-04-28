import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  function toggleSignIn() {
    setSignIn(!signIn);
  }
  return (
    <div className="w-full flex flex-col  items-center ">
      <Header />
      <div className="absolute w-full min-h-fit">
        <img
          className="w-full"
          alt="bg-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
        />
      </div>
      <form className=" bg-opacity-80 top-1/4  w-1/6 absolute mx-auto p-12  left-0 right-0  text-white bg-black w-fit flex flex-col">
        <h1 className="font-bold text-3xl m-2 w-full">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            placeholder="Full Name"
            className=" my-4 p-4 w-full bg-gray-700"
            type="text"
          ></input>
        )}
        <input
          type="email"
          placeholder="Email Address"
          className=" p-4 my-4 w-full bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=" p-4 my-4 w-full bg-gray-700"
        ></input>
        <button className="p-4 my-4 bg-red-700 w-full">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
          {signIn ? "New to Netflix?" : "Already registered"}

          <span className=" cursor-pointer" onClick={toggleSignIn}>
            {signIn ? "Sign In" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
