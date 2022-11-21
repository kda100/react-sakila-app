import axios from "axios";
import { filmActions } from "./filmsSlice";

export const fetchFilms = ({ categoryId, sortBy, offset, pageSize }) => {
  return async (dispatch) => {
    try {
      dispatch(filmActions.loading());
      const response = await axios.get(
        `http://sakilaservice-env.eba-jurekius.eu-west-2.elasticbeanstalk.com/api/films?categoryId=${categoryId}&sortBy=${sortBy}&offset=${offset}&pageSize=${pageSize}`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(filmActions.setFilms(response.data));
    } catch (error) {
      dispatch(filmActions.setError("An error has occurred"));
    }
  };
};
