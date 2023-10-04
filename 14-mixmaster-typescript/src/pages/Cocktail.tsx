
import { useLoaderData, Link} from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const itemUrl = "https://www.thecocktaildb.com/images/ingredients/";

const searchSingleCocktail = (id : number) => {
  return {
    queryKey: ["search", "all", id],
    queryFn: async () => {
      const response = await axios.get(`${singleUrl}${id}`);
      return response.data.drinks;
    },
  };
};

export const loader = async ({ params }) => {
  const { id } = params;

  return { id };
};




const Cocktail = () => {
  const { id } = useLoaderData() as unknown;
  const { data } = useQuery(searchSingleCocktail(id));
  console.log(data);
 
  const singleDrink = data[0];
  console.log(singleDrink);

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (items) =>
        items.startsWith("strIngredient") && singleDrink[items] !== null
    )
    .map((item) => singleDrink[item]);
  console.log(validIngredients);

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;
  console.log(singleDrink);

  return (
    <div>
      <header className="mt-4 flex items-center justify-center">
        <Link
          className="bg-[#ee5630] rounded-full px-6 py-2 text-white mt-2 capitalize hover:bg-[#ee3030]"
          to="/"
        >
          Back Home
        </Link>
      </header>
      <div className="grid grid-cols-7 mt-6 max-sm:grid-cols-1">
        <div className=" col-span-3">
          <h3 className="font-bold text-2xl pb-4">{name}</h3>
          <img
            src={image}
            alt={name}
            className="max-w-[90%] rounded-lg shadow-xl shadow-slate-300"
          />
          <div className="mt-5">
            <p className="mb-2">
              <span className="mr-2 text-white font-bold bg-[#5e3447] rounded-sm px-3 pb-1 text-center items-center">
                name:
              </span>
              {name}
            </p>
            <p className="mb-2">
              <span className="mr-2 text-white font-bold bg-[#5e3447] rounded-sm px-3 pb-1 text-center items-center">
                category:
              </span>
              {category}
            </p>
            <p className="mb-2">
              <span className="mr-2 text-white font-bold bg-[#5e3447] rounded-sm px-3 pb-1 text-center items-center">
                info:
              </span>
              {info}
            </p>
            <p className="mb-2">
              <span className="mr-2 text-white font-bold bg-[#5e3447] rounded-sm px-3 pb-1 text-center items-center">
                glass:
              </span>
              {glass}
            </p>
            <p className="mb-2">
              <span className="mr-2 text-white font-bold bg-[#5e3447] rounded-sm px-3 pb-1 text-center items-center">
                instructions:
              </span>
              {instructions}
            </p>
          </div>
        </div>
        <div className="col-span-4 min-w-full">
          <div>
            <h4 className="font-bold text-2xl pb-4">Ingredients</h4>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {validIngredients.map((item) => (
                <div>
                  <img
                    src={`${itemUrl}${item}.png`}
                    alt=""
                    className="w-[90%] m-auto max-lg:w-[50%] max-sm:w-[30%]"
                  />
                  <p className="text-center mt-2 text-slate-600 font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
