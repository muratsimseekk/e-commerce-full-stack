import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/login.css";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const user = useSelector((store) => store.user);

  const submitHandler = async (formData, e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      if (user.email == formData.email && user.password == formData.password) {
        setLoginSuccess(true);
        setLoginError(false);
      } else {
        setLoginError(true);
      }

      console.log("Login data: ", formData);
    } catch (error) {
      setLoginError(true);
      console.error("Login error: ", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(user);

  return (
    <div className="wrapper">
      {loginSuccess ? (
        <div className="flex flex-col gap-8 pb-48 items-center">
          <p className="text-xl tracking-wider  text-dangerRed font-medium">
            {" "}
            Hello Again {user.name} !
          </p>
          <p className="text-xl tracking-wider font-medium">
            {" "}
            Redirecting home page ..
          </p>
          <Spinner color="blue" className="w-24 h-24 pb-8" />
        </div>
      ) : (
        <div className="container xl:w-max xl:h-min">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="z-50 px-12 pt-12 pb-14 flex flex-col gap-4"
          >
            <h3 className="text-center text-xl font-semibold tracking-wider">
              Login Form
            </h3>
            {loginError == true && (
              <p className="text-dangerRed text-center">
                Invalid Email or Password
              </p>
            )}
            <div className="flex flex-col">
              <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
                <label
                  className="font-medium text-base tracking-wider"
                  htmlFor="mailAddress"
                >
                  Email :
                </label>
                <input
                  type="email"
                  name=""
                  className="px-2 w-max"
                  id="mailAddress"
                  placeholder="Enter Mail Address"
                  required
                  {...register("email", {
                    required: "Email address required .",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="text-dangerRed">{errors.email.message} *</p>
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
                <label
                  className="font-medium text-base tracking-wider"
                  htmlFor="passwordText"
                >
                  Password:{" "}
                </label>
                <input
                  type="password"
                  id="passwordText"
                  className="px-2"
                  placeholder="Enter Password"
                  {...register("password", {
                    required: "Password required.",
                  })}
                />
              </div>
              {errors.password && (
                <p className="text-dangerRed ">{errors.password.message} *</p>
              )}
            </div>
            <button
              className={`border-2 w-1/3 mx-auto py-2 rounded-xl  font-semibold tracking-wider ${
                isValid
                  ? "hover:cursor-pointer hover:border-darkBg hover:text-lightText hover:bg-darkBg"
                  : "hover:cursor-not-allowed"
              } `}
              disabled={!isValid}
              type="submit"
            >
              Log in
            </button>
          </form>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
}

export default Login;
