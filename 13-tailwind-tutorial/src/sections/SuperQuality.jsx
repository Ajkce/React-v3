import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We provide you{" "}
          <span className="text-coral-red inline-block mt-3"> Super</span>
          <span className="text-coral-red inline-block mt-3">Quality</span>{" "}
          Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla dolor quas odit fugiat quo repellendus rerum veritatis earum, quaerat perspiciatis non, alias debitis totam, soluta eaque iure quos. Iusto, ducimus.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, est!</p>
        <div className="mt-11">

        <Button label="Shop now"></Button>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
