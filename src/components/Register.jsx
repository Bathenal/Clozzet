import { IoCartOutline } from "react-icons/io5";
import { HiBars3 } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";

function Register() {
    return (    <section className="container ">
    <div className="flex w-[100%] h-[70vh] justify-between mx-auto">
     
      <div className="flex flex-col text-xl gap-6 h-[100vh] w-[100%]">
        <h2 className="text-2xl font-serif font-bold text-center">
          Login to your Account
        </h2>
        <div className="flex">
        <input
          type="text"
          placeholder="First Name"
          className="border border-green py-6 px-[4em] rounded-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-green py-6 px-[4em] rounded-full"
        />
        </div>
                <input
          type="text"
          placeholder="Email Address"
          className="border border-green py-6 px-[4em] rounded-full"
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="border border-green py-6 px-[4em] rounded-full"
        />
                <input
          type="text"
          placeholder="Password"
          className="border border-green py-6 px-[4em] rounded-full"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className="border border-green py-6 px-[4em] rounded-full"
        />
        <div className="flex gap-8">
          <input type="checkbox" className=" indeterminate:bg-gray-300" />

          <p>Remember Me</p>
          <p className="text-green-400">Forgot Password?</p>
        </div>
        <button className="border border-green py-6 px-[4em] rounded-full bg-green-300">
          Sign In
        </button>
        <div className="flex">
          <div
            className="border-b-4 border-gray-300"
          ></div>
          <p>OR</p>
          <div
            className="border-b-4 border-gray-300"
          ></div>
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
      <div className="flex h-[100vh] w-[100%]">
        <img
          src="src/assets/images/signup.png"
          alt="login image"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  </section>
    )
}
  export default Register;