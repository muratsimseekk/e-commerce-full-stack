import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../css/signup.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store/actions/userAction";

function Signup() {
  const [selectedOption, setSelectedOption] = useState("customer");

  const [selectedPhone, setSelectedPhone] = useState("tr");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isim = useSelector((state) => state.user.name);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const submitHandler = async (data) => {
    try {
      setIsLoading(true);

      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("data gonderildi", data);
          dispatch(changeName(data.name));
          navigate(-1);
        }, 2500);
      });
    } catch {
      console.log("Data Gonderilirken Hata Olustu", data);
    } finally {
      setIsLoading(false);
    }
  };

  const selectHandler = (e) => {
    const selection = e.target.value;
    setSelectedOption(selection);
  };

  const phoneHandler = (phone) => {
    setSelectedPhone(phone);
  };
  console.log(watch("password"));
  return (
    <div className="wrapper ">
      {isLoading ? (
        <div className="flex flex-col gap-12 pb-48 items-center">
          <p className="text-2xl tracking-wider font-medium">
            {" "}
            Redirecting previous page ..
          </p>
          <Spinner color="blue" className="w-36 h-36 pb-8" />
        </div>
      ) : (
        <div className="container xl:w-max xl:h-min ">
          <form
            className="z-50 px-12 pt-12 pb-14 flex flex-col gap-4"
            onSubmit={handleSubmit(submitHandler)}
          >
            <h3 className="text-center text-xl font-semibold tracking-wider">
              Register Form
            </h3>
            <div className="flex flex-col">
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
              </div>
              {errors.name && (
                <p className="text-dangerRed">{errors.name.message}</p>
              )}
            </div>
            <div className="flex flex-col">
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
              </div>
              {errors.surname && (
                <p className="text-dangerRed">{errors.surname.message} *</p>
              )}
            </div>
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
              </div>
              {errors.password && (
                <p className="text-dangerRed w-1/2">
                  {errors.password.message} *
                </p>
              )}
            </div>
            <div className="flex flex-col">
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
                  placeholder="Confirm Password"
                  className="px-2"
                  {...register("confirm_password", {
                    required: "Password required",
                    validate: (pass) => {
                      if (watch("password") != pass) {
                        return "Password does not match";
                      }
                    },
                  })}
                />
              </div>
              {errors.confirm_password && (
                <p className="text-dangerRed">
                  {errors.confirm_password.message} *
                </p>
              )}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <label className="text-lg font-medium">Choose Your Role</label>
              <select
                className="w-1/3 py-2 text-center bg-darkBg text-lightText text-sm font-medium"
                name=""
                id=""
                value={selectedOption}
                onChange={selectHandler}
              >
                <option value="customer">Customer</option>
                <option value="store">Store</option>
              </select>
            </div>
            {selectedOption == "store" && (
              <>
                {" "}
                <div className="flex flex-col">
                  <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
                    <label
                      htmlFor=""
                      className="font-medium text-base tracking-wider"
                    >
                      Store Name:
                    </label>
                    <input
                      className="px-2"
                      type="text"
                      placeholder="Store Name"
                      {...register("store_name", {
                        required: "Store name required",
                        minLength: {
                          value: 3,
                          message: "Cannot be less than 3 character",
                        },
                      })}
                    />
                  </div>
                  {errors.store_name && (
                    <p className="text-dangerRed">
                      {errors.store_name.message} *
                    </p>
                  )}
                </div>
                <div className="flex flex-col ">
                  <div className="flex gap-8 border-b-2 border-black pb-2 justify-between items-center">
                    <label
                      htmlFor=""
                      className="font-medium text-base tracking-wider"
                    >
                      Phone Number:
                    </label>
                    <div className="flex justify-end">
                      <PhoneInput
                        country={selectedPhone}
                        value={selectedPhone}
                        onChange={phoneHandler}
                        {...register("phone_number", {
                          required: "Phone number required",
                        })}
                      />
                    </div>
                  </div>
                  {errors.phone_numbers && (
                    <p className="text-dangerRed">
                      {errors.phone_numbers.message} *
                    </p>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
                    <label
                      htmlFor=""
                      className="font-medium text-base tracking-wider"
                    >
                      Store Tax ID:
                    </label>
                    <input
                      className="px-2"
                      type="text"
                      placeholder="Taxt ID"
                      {...register("tax_id", {
                        required: "Store Tax ID required",
                        pattern: {
                          value: /^T\d{4}V\d{6}$/,
                          message: "Invalid Store Tax ID format",
                        },
                      })}
                    />
                  </div>
                  {errors.tax_id && (
                    <p className="text-dangerRed">{errors.tax_id.message} *</p>
                  )}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-4 border-b-2 border-black pb-2 justify-between">
                    <label
                      htmlFor=""
                      className="font-medium text-base tracking-wider"
                    >
                      Store IBAN:
                    </label>
                    <input
                      className="px-2"
                      type="text"
                      placeholder="IBAN Address"
                      {...register("iban", {
                        required: "IBAN Number is required",
                        pattern: {
                          value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                          message: "Invalid IBAN address",
                        },
                      })}
                    />
                  </div>
                  {errors.iban && (
                    <p className="text-dangerRed">{errors.iban.message} *</p>
                  )}
                </div>
              </>
            )}
            <button
              className={`border-2 w-1/3 mx-auto py-2 rounded-xl  font-semibold tracking-wider ${
                isValid
                  ? "hover:cursor-pointer hover:border-darkBg hover:text-lightText hover:bg-darkBg"
                  : "hover:cursor-not-allowed"
              } `}
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
      )}
    </div>
  );
}

export default Signup;
