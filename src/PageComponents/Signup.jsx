import React from "react";
import { useForm } from "react-hook-form";
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
    <div className="py-20 bg-red-100 border-orange-700 border flex justify-center">
      <div className="w-1/2 border-black border py-12">
        <form onSubmit={handleSubmit(submitHandler)}>
          <h3>Register</h3>
          <div>
            <label>
              First Name:
              <input
                type="text"
                placeholder="Enter Your First Name"
                {...register("name", {
                  required: "Name cannot be empty.",
                  minLength: {
                    value: 3,
                    message: "Name cannot be less that 3 characters",
                  },
                })}
              />
            </label>
          </div>
          <div>
            <label>
              Family Name:
              <input
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
            </label>
          </div>
          <div>
            <label>
              Email :
              <input
                type="email"
                name=""
                id=""
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
            </label>
          </div>
          <div>
            <label>
              Password:{" "}
              <input
                type="password"
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
            </label>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <label>
              Confirm Password:{" "}
              <input
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
            </label>
            {errors.confirm_password && (
              <p>{errors.confirm_password.message}</p>
            )}
          </div>

          <button disabled={!isValid} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
