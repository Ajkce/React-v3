import React from "react";

import { Link, useRouteError } from "react-router-dom";
import Error404 from "../assets/404Error.svg";
import Oops from "../assets/Oops.svg";

interface Error {
  status: number;
  statusText: string;
  data: string;
}

const Error: React.FC = () => {
  const error = useRouteError() as Error;
  console.log(error);

  if (error.status === 404) {
    return (
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <img className="h-[60vh]" src={Error404} alt="404 not found" />
        <h3 className="p-3 font-bold text-4xl text-slate-800">Ohh!</h3>
        <p className="text-gray-600 font-semibold">
          We can't seem to find the page you are looking for
        </p>
        <Link
          to="/"
          className="bg-[#ee5630] rounded-full px-6 py-2 text-white mt-4 capitalize hover:bg-[#ee3030]"
        >
          back home
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] flex-col">
        <img className="h-[60vh]" src={Oops} alt="404 not found" />
        <h3 className="p-3 font-bold text-4xl text-slate-800">Oops!</h3>
        <p className="text-gray-600 font-semibold text-xl">
          Something went wrong on our side
        </p>
        <Link
          to="/"
          className="bg-[#ee5630] rounded-full px-6 py-2 text-white mt-4 capitalize hover:bg-[#ee3030]"
        >
          back home
        </Link>
      </div>
    </div>
  );
};

export default Error;
