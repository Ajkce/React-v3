import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { useQuery } from "react-query";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCocktails = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${searchUrl}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader = async ({ request }) => {
  console.log(request);
  const url = new URL(request.url);

  const searchTerm = url.searchParams.get("search") || "";

  return { searchTerm };
};

interface LoaderData {
  drinks: unknown;
  searchTerm: string;
}

const Landing = () => {
  const { searchTerm } = useLoaderData() as LoaderData;
  const { data: drinks, isLoading } = useQuery(searchCocktails(searchTerm));

  if(isLoading){
    return <h4>Loading ...</h4>
  }

  return (
    <>
      <SearchForm searchTerm={searchTerm}></SearchForm>
      <CocktailList drinks={drinks}></CocktailList>
    </>
  );
};

export default Landing;
