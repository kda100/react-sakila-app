import axios from "axios";
import sakilaServiceBaseUrl from "../../services/sakilaApi";
import { categoryActions } from "./categoriesSlice";

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${sakilaServiceBaseUrl}/api/categories`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(categoryActions.setCategories(response.data));
    } catch (error) {
      dispatch(categoryActions.setError("An error has occurred"));
    }
  };
};
