import CustomersTable from "../components/customers/CustomersTable";
import QueryBar from "../components/ui/QueryBar";
import CustomPagination from "../components/ui/CustomPagination";
import {
  countriesType,
  customerParametersOffsetType,
  customerParametersType,
  customerTotalPagesType,
} from "../constants/customSelectorTypes";
import { customerActions } from "../store/items/customers/customersSlice";
import sortBys from "../constants/customers/sortBys";
import { fetchCountries } from "../store/filters/countries/countriesActionCreaterThunks";
import { Fragment } from "react";
import useUrlPath from "../hooks/useUrlPath";

console.log("downloaded");

function CustomersPage() {
  useUrlPath(customerParametersType, customerActions);
  return (
    <Fragment>
      <QueryBar
        parametersSelectorType={customerParametersType}
        filterSelectorType={countriesType}
        sortBys={sortBys}
        itemActions={customerActions}
        fetchFilters={fetchCountries}
      />
      <CustomPagination
        offsetSelectorType={customerParametersOffsetType}
        totalPagesSelectorType={customerTotalPagesType}
        itemActions={customerActions}
      />
      <CustomersTable />
    </Fragment>
  );
}

export default CustomersPage;
