// This example uses `@web3forms/react` plugin and tailwindcss for css styling
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import Swal from "sweetalert2";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey = "56fb009f-993e-4c4c-b30e-909fd16fe131";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      Swal.fire({
        title: "Message sent!",
        text: "I will get Back to you soon!",
        icon: "success",
      });
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    },
  });

  return (
    <div
      className="flex mb-20 justify-center items-center flex-col md:flex-row md:gap-20 gap-2 w-full md:px-16 px-1 py-8 mt-10"
      id="contact"
    >
      <div className="">
        <h1 className="text-4xl font-bold text-stone-950">
          Let&apos;s connect!
        </h1>
        <p className="text-lg text-stone-700 mt-1">
          Fill out the form below and I&apos;ll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="my-5">
        <h1 className="flex gap-2 items-center text-2xl font-bold text-stone-950 my-10">
          Contact Me {<FaArrowRightLong />}
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-0 text-stone-950 text-nowrap"
        >
          <div className="flex-col gap-12 font-semibold text-lg hidden md:flex">
            <label htmlFor="name">Name :</label>
            <label htmlFor="email">Email :</label>
            <label htmlFor="message">Message :</label>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mb-5 w-full">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-stone-950   focus:ring-1  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 500,
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5 w-full">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full px-4 py-3 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-stone-950   focus:ring-1  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3 w-full">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full px-4 py-3 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-stone-950   rounded-md outline-none  h-36 focus:ring-1  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:col-start-2 py-4 font-semibold text-white transition-colors bg-stone-950 rounded-md hover:bg-stone-900 hover:text-gray-200 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
          >
            {isSubmitting ? (
              <svg
                className="w-5 h-5 mx-auto text-white dark:text-stone-950 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
      {/* {isSubmitSuccessful && isSuccess && (
        <div className="mt-3 text-sm text-center text-green-500">
          {message || "Success. Message sent successfully"}
        </div>
      )}
      {isSubmitSuccessful && !isSuccess && (
        <div className="mt-3 text-sm text-center text-red-500">
          {message || "Something went wrong. Please try later."}
        </div>
      )} */}
    </div>
  );
}
