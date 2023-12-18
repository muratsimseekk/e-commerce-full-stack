import React from "react";
import { useForm } from "react-hook-form";
import "../css/signup.css";
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const submitHandler = (data) => {
    if (isValid) {
      console.log("data gonderildi", data);
    } else {
      console.log("error verdi", errors);
    }
  };
  console.log(watch("password"));
  return (
    <div className="wrapper ">
      <div className="container xl:w-max xl:h-min ">
        <form
          className="z-50 px-12 pt-12 pb-20 flex flex-col gap-4 "
          onSubmit={handleSubmit(submitHandler)}
        >
          <h3 className="text-center text-xl font-semibold tracking-wider">
            Register Form
          </h3>
          <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
            <label
              className="font-medium text-base tracking-wider "
              htmlFor="name"
            >
              First Name:
            </label>
            <input
              type="text"
              id="name"
              className="px-2"
              placeholder="Enter Your First Name"
              {...register("name", {
                required: "Name cannot be empty.",
                minLength: {
                  value: 3,
                  message: "Name cannot be less that 3 characters",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
            <label
              className="font-medium text-base tracking-wider"
              htmlFor="surname"
            >
              Family Name:
            </label>
            <input
              id="surname"
              className="px-2"
              type="text"
              placeholder="Enter Your Surname"
              {...register("surname", {
                required: "Surname cannot be empty.",
                minLength: {
                  value: 3,
                  message: "Surname cannot be less than 3 characters",
                },
              })}
            />
            {errors.surname && <p>{errors.surname.message}</p>}
          </div>
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
              className="px-2"
              id="mailAddress"
              placeholder="Enter Your Mail Address"
              required
              {...register("email", {
                required: "Email address required .",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
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
                minLength: {
                  value: 8,
                  message: "Password cannot be less then 8 characters",
                },
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/,
                  message:
                    "Password needs to include numbers, lower case, upper case and special chars",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
            <label
              className="font-medium text-base tracking-wider"
              htmlFor="passwordConfirm"
            >
              Confirm Password:{" "}
            </label>
            <input
              id="passwordConfirm"
              type="password"
              placeholder="Confirm Your Password"
              {...register("confirm_password", {
                required: "Password required",
                validate: (pass) => {
                  if (watch("password") != pass) {
                    return "Password does not match";
                  }
                },
              })}
            />
            {errors.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
          </div>

          <button
            className="border-2 w-1/3 mx-auto py-2 rounded-xl hover:cursor-pointer font-semibold tracking-wider hover:border-darkBg hover:text-lightText hover:bg-darkBg"
            disabled={!isValid}
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Signup;
