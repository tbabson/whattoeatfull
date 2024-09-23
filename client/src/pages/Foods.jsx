import {
  SearchContainer,
  Hero,
  FoodContainer,
  PaginationContainer,
} from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { toast } from "react-toastify";

const allFoodsQuery = (params) => {
  const {} = params;
  return {};
};

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/foods");
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllFoodsContext = createContext();

const Foods = () => {
  const { data } = useLoaderData();

  return (
    <AllFoodsContext.Provider value={{ data }}>
      <Hero />
      <SearchContainer />
      <FoodContainer />
    </AllFoodsContext.Provider>
  );
};

export const useAllFoodsContext = () => useContext(AllFoodsContext);

export default Foods;
