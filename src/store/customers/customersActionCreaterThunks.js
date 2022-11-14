import axios from "axios";
import { customerActions } from "./customersSlice";

export const fetchCustomers = ({ countryId, sortBy, offset, pageSize }) => {
  return async (dispatch) => {
    try {
      dispatch(customerActions.loading());
      const response = await axios.get(
        `http://localhost:8080/api/customers?countryId=${countryId}&sortBy=${sortBy}&offset=${offset}&pageSize=${pageSize}`
      );
      if (response.status !== 200) {
        throw new Error();
      }
      dispatch(customerActions.setCustomers(response.data));
    } catch (error) {
      dispatch(customerActions.setError("An error has occurred"));
    }
  };
};
