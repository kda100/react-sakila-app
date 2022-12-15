import { filmActions } from "./filmsSlice";
import fetchData from "../../fetchData";

export const fetchFilms = ({ filterId, sortBy, offset, pageSize }) => {
  return fetchData(
    `/films?categoryId=${filterId}&sortBy=${sortBy}&offset=${offset}&pageSize=${pageSize}`,
    filmActions.setItems,
    filmActions.setError
  );
};
