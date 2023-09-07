import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { useGlobalContext } from "./Context";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

console.log(import.meta.env.VITE_API_KEY);

const Gallery = () => {
  const { searchContext } = useGlobalContext();
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["images", searchContext],
    queryFn: async () => {
      const response = await axios.get(`${url}&query=${searchContext}`);
      return response;
    },
  });

  if (isLoading) {
    return (
      <section className="image-container">
        <div>Loading...</div>;
      </section>
    );
  }
  if (isError) {
    return (
      <section className="image-container">
        <div>There was an error</div>;
      </section>
    );
  }

  if (data?.data?.results.length < 1) {
    return (
      <section className="image-container">
        <div>No image found</div>;
      </section>
    );
  }
  return (
    <section className="image-container">
      {data?.data?.results.map((result) => {
        return (
          <img
            key={result.id}
            src={result.urls.regular}
            alt={result.alt_description}
            className="img"
          />
        );
      })}
    </section>
  );
};

export default Gallery;
