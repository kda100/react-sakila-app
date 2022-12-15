import axios from "axios";
import sakilaServiceBaseUrl from "../services/sakilaApi";

export default function fetchData(endpoint, setData, setError) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${sakilaServiceBaseUrl}${endpoint}`);
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(setData(response.data));
    } catch (error) {
      dispatch(setError("An error has occurred"));
    }
  };
}
