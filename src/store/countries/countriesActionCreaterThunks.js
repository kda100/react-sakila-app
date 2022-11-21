import axios from "axios";
import { countryActions } from "./countriesSlice";

export const fetchCountries = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/countries`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(countryActions.setCountries(response.data));
    } catch (error) {
      dispatch(countryActions.setError("An error has occurred"));
    }
  };
};
