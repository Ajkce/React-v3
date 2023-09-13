import React from "react";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({searchTerm}) => {
  return (
    <div>
      <Form className="my-20 flex justify-center items-center mx-10 relative">
        <div className="absolute left-2">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          name="search"
          className="box w-full  bg-gray-50 px-8 py-2 border-slate-200 border-2 rounded-md  focus:ring-blue-500 focus:border-blue-500 outline-none"
          defaultValue={searchTerm}
       />

        <button
          type="submit"
          className="absolute right-2 bg-[#bd3512] rounded-md px-6 py-1 text-white  capitalize hover:bg-[#460909]  "
        >
          Search
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
