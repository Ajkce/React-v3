import React from "react";
import CocktailCard from "./CocktailCard";

interface Drinks {
  drinks: unknown;
}

const CocktailList = (data: Drinks) => {
  const { drinks } = data;
  console.log(drinks);
  if (!drinks) {
    return <h4 className="text-center">No matching cocktail found</h4>;
  }

  if (Array.isArray(drinks)) {
    const formattedDrinks = drinks.map((drink) => {
      const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
        drink;
      return {
        id: idDrink,
        name: strDrink,
        image: strDrinkThumb,
        info: strAlcoholic,
        glass: strGlass,
      };
    });

    return (
      <div className=" grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 ">
        {formattedDrinks.map((item) => (
          <CocktailCard key={item.id} {...item}></CocktailCard>
        ))}
      </div>
    );
  }
};

export default CocktailList;
