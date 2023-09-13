import React from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const response = await axios.post(url, data);
    toast.success(response.data.msg);

    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const url = "https://www.course-api.com/cocktails-newsletter";

const NewsLetter = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="flex justify-center items-center h-[90vh] ">
      <Form
        method="POST"
        className="px-6 w-[400px] shadow-xl shadow-slate-400 rounded-lg "
      >
        <h4 className="text-center font-bold text-lg leading-normal text-slate-800 my-6">
          Our Newsletter
        </h4>
        {/* name */}
        <div className=" capitalize pb-4">
          <label htmlFor="name" className="text-slate-800 font-medium pr-3">
            name:
          </label>
          <input
            type="text"
            className="bg-gray-200 rounded-md px-3 py-1 placeholder-slate-500 text-slate-800 border-gray-300 border-[1px]"
            name="name"
            id="name"
            required
          />
        </div>
        {/* lastName */}
        <div className=" capitalize pb-4">
          <label htmlFor="lastName" className="text-slate-800 font-medium pr-3">
            LastName:
          </label>
          <input
            type="text"
            className="bg-gray-200 rounded-md px-3 py-1 placeholder-slate-500 text-slate-800 border-gray-300 border-[1px]"
            name="lastName"
            id="lastName"
            required
          />
        </div>
        {/* email */}
        <div className=" capitalize pb-4">
          <label htmlFor="email" className="text-slate-800 font-medium pr-3">
            email:
          </label>
          <input
            type="email"
            className="bg-gray-200 rounded-md px-3 py-1 placeholder-slate-500 text-slate-800 border-gray-300 border-[1px]"
            name="email"
            id="email"
            defaultValue="test@test.com"
            required
          />
        </div>
        <div className="w-full ">
          <button
            type="submit"
            className="bg-[#bd3512] rounded-sm px-6 py-2 text-white mt-4 capitalize hover:bg-[#460909] block w-full mb-5"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default NewsLetter;
