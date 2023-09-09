import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const PopularProducts = () => {
  return (
    <div id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h4 className="text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular</span> Products
        </h4>
        <p className="mt-7 sm:max-w-lg text-slate-gray">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, sunt
          excepturi. Voluptas pariatur soluta esse deserunt, nostrum animi
          ipsum.
        </p>
      </div>
      <div className="grid mt-16 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
        {products.map((product) => {
          return (
            <div key={product.name} className="flex flex-col w-full max-sm:w-full" >
              <img src={product.imgURL}></img>
              <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} width={24}  height={24}/>
                <p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
              </div>
              <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{product.name}</h3>
              <p className="mt-2 font-semibold text-coral-red text-2xl leading-normal">{product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularProducts;
