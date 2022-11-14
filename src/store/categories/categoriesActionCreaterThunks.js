import axios from "axios";
import { categoryActions } from "./categoriesSlice";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/categories`);
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(categoryActions.setCategories(response.data));
    } catch (error) {
      dispatch(categoryActions.setError("An error has occurred"));
    }
  };
};
