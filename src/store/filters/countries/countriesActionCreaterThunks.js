import fetchData from "../../fetchData";
import { countryActions } from "./countriesSlice";

export const fetchCountries = () => {
  return fetchData(
    "/countries",
    countryActions.setFilters,
    countryActions.setError
  );
};
