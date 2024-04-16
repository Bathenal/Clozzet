import { useState } from "react";

import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  function handleShowPassword() {
    setShowPassword((prev) => !prev);
  }
  return (
    <section className="container ">
      <div className="flex w-[100%] h-[70vh] justify-between mx-auto">
        <div className="flex h-[100vh] w-[100%]">
          <img
            src="src/assets/images/login.png"
            alt="login image"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-12 h-[100vh] w-[100%] mt-10 mb-0 pl-10 ">
          <h2 className="text-2xl font-serif font-bold text-center">
            Login to your Account
          </h2>
          <input
            type="text"
            placeholder="Email Address"
            className="border border-green py-6 px-[4em] rounded-full"
          />
          <div className="flex border border-green rounded-full">
            <input
              type={showPassword?"password":"text"}
              placeholder="Password"
              className=" py-6 px-[4em] flex flex-1 "
            />
            <div
              className="pr-3 flex justify-center items-center"
              onClick={handleShowPassword}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </div>
          </div>
          <div className="flex gap-8">
            <input type="checkbox" className=" indeterminate:bg-gray-300" />

            <p>Remember Me</p>
            <p className="text-green-400">Forgot Password?</p>
          </div>
          <button className="border border-gray-200 py-6 px-[4em] rounded-full bg-green-300">
            Sign In
          </button>
          <div className="flex">
            <div className="border-t-2 border-gray-500 w-[400px]"></div>
            <p>OR</p>
            <div className="border-t-2 border-gray-500 w-[400px]"></div>
          </div>
          <button className="border border-gray-300 py-6 px-[4em] rounded-full text-xl flex items-center gap-5">
            <FcGoogle />
            Log In With Google
          </button>{" "}
          <p>
            Dont Have An Account Yet?{" "}
            <span className="text-green-400">Sign Up Free</span>
          </p>
        </div>
      </div>
    </section>
  );
}
export default Signin;
