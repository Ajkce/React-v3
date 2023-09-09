import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container dark:text-white">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What our <span className="text-coral-red">Customer</span> Say?
      </h3>
      <p className="info-text m-auto text-center mt-4 max-w-lg dark:text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        distinctio ut. Animi ipsam voluptatum quidem dolores reiciendis quasi
        iste! Blanditiis.
      </p>

      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
