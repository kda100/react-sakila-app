import { customerActions } from "./customersSlice";
import fetchData from "../../fetchData";

export const fetchCustomers = ({ filterId, sortBy, offset, pageSize }) => {
  return fetchData(
    `/customers?countryId=${filterId}&sortBy=${sortBy}&offset=${offset}&pageSize=${pageSize}`,
    customerActions.setItems,
    customerActions.setError
  );
};
