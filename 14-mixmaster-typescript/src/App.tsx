import React from "react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import {
  About,
  Landing,
  Error,
  NewsLetter,
  HomeLayout,
  Cocktail,
  SinglePageError,
} from "./pages";

const query = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 5 * 60,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError></SinglePageError>,
        loader: singleCocktailLoader,
        element: <Cocktail></Cocktail>,
      },
      {
        path: "newsletter",
        element: <NewsLetter></NewsLetter>,
        action: newsLetterAction,
      },
      {
        path: "about",
        element: <About></About>,
        children: [
          {
            index: true,
            element: <h2>Our Company</h2>,
          },
          {
            path: "person",
            element: <h2>Person</h2>,
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={query}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
    </QueryClientProvider>
  );
};

export default App;
