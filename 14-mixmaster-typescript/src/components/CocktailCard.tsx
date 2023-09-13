import React from "react";
import { Link, useOutletContext } from "react-router-dom";


interface Data {
  id: string;
  name: string;
  image: string;
  info: string;
  glass: string;
}

const CocktailCard = ({ id, name, image, info, glass }: Data) => {
  const data = useOutletContext()
  console.log(data)
  return (
    <div className="h-[420px] max-w-[320px] rounded-lg shadow-slate-300 shadow-lg  mx-auto max-lg:w-full">
      <img
        className="h-[65%]  w-full object-cover rounded-t-lg"
        src={image}
        alt={name}
      />
      <div className="p-4">
        <h4 className="font-bold text-lg">{name}</h4>
        <h5 className="font-medium">{glass}</h5>
        <p className="text-slate-600 mb-2">{info}</p>
        <Link
          className="bg-[#ee5630] rounded-md px-4 py-0.5 text-white capitalize hover:bg-[#ee3030]"
          to={`/cocktail/${id}`}
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
