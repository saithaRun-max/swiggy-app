import { useState } from "react";

const SigninPage = () => {
    const [isSignInForm, setIsSignInForm] =useState("");




    
  return (
    <div>
         <div className="absolute top-24 left-1/3 bg-black opacity-80 w-[420px] h-[580px] p-2  mx-auto ">
        <h1 className="font-semibold text-white text-4xl px-1 mt-10 ml-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault(), handleButtonClick();
          }}
          className=" flex flex-col mt-10 px-10"
        >
          {!isSignInForm ? (
            <div className="">
              <input
                className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full  p-3 mb-5  rounded-sm"
                type="text"
                placeholder="Enter Full Name"
              />

              <input
                className=" bg-slate-500 placeholder:text-indigo-100 text-white font-medium w-full p-3 mb-5  rounded-sm"
                type="text"
                placeholder="Enter Phone Number"
              />
            </div>
          ) : ("")}

          <input
            className=" bg-slate-500 placeholder:text-indigo-100  font-medium p-3 mb-5  rounded-sm"
            type="text"
            placeholder="Email Address"
          />
          <input
            className=" bg-slate-500 placeholder:text-indigo-100 font-medium p-3 mb-5 rounded-sm"
            type="password"
            placeholder="Password"
          />
          <p className="text-white mx-5  cursor-pointer">{validStatus}</p>

          <button className="bg-red-600 p-3 text-white w-full rounded-sm mt-5 mx-auto  font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={() => handleToggleSignIn()}
          className="text-white mx-10 px-1 mt-14 cursor-pointer"
        >
          {isSignInForm
            ? "New to Netfilx? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </div>
    </div>
   
  )
}

export default SigninPage;
