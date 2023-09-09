import React from "react";
import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          alt=""
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red inline-block mt-3"> Special</span>{" "}
          Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolor
          quas odit fugiat quo repellendus rerum veritatis earum, quaerat
          perspiciatis non, alias debitis totam, soluta eaque iure quos. Iusto,
          ducimus.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reiciendis eaque nulla. Reprehenderit voluptatem aperiam vero alias
          debitis ipsa illo!{" "}
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight}></Button>
          <Button
            label="learn more"
            backgroundColor="bg-coral-red"
            borderColor=" border-slate-gray"
            textColor="text-slate-gray"
          ></Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
