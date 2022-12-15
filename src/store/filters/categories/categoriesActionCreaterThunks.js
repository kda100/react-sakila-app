import fetchData from "../../fetchData";
import { categoryActions } from "./categoriesSlice";

export const fetchCategories = () => {
  return fetchData(
    "/categories",
    categoryActions.setFilters,
    categoryActions.setError
  );
};
