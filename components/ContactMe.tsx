import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactMe = ({}: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
    const body = `Hi, my name is ${formData.name}, ${formData.message} ${formData.email}`;
    window.location.href = `mailto:nologe37@gmail.com?subject=${formData.subject}&body=${body}`;
  };

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row 
    max-w-7xl px-5 md:px-10 space-y-4 sm:space-y-8 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-14 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-3 sm:space-y-10">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">Lets Talk</span>
        </h4>

        <div className="flex items-center space-x-5 justify-center">
          <PhoneIcon className="w-7 h-7 text-[#f7ab0a] animate-pulse" />
          <p className="text-md md:text-xl">+2349122350327</p>
        </div>

        <div className="flex items-center space-x-5 justify-center">
          <EnvelopeIcon className="w-7 h-7 text-[#f7ab0a] animate-pulse" />
          <p className="text-md md:text-xl">nologe37@gmail.com</p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message", { required: true })}
          placeholder="Message"
          className="contactInput"
        />
        <button
          type="submit"
          className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
