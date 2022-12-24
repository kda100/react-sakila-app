import { Fragment, useCallback, useMemo } from "react";
import FilterDropdown from "../ui/dropdowns/FilterDropdown";
import Error from "../ui/Error";
import QueryBar from "../ui/QueryBar";
import sortBys from "../../constants/customers/sortBys";
import SortByDropdown from "../ui/dropdowns/SortByDropdown";
import PageSizeDropdown from "../ui/dropdowns/PageSizeDropdown";
import useQuery from "../../hooks/useQuery";
import { customerActions } from "../../store/items/customers/customersSlice";
import { fetchCountries } from "../../store/filters/countries/countriesActionCreaterThunks";
import {
  customerParametersType,
  countriesType,
} from "../../constants/customSelectorTypes";

let isInitial = true;

function CustomersQueryBar() {
  const {
    setFilterIdHandler: setCountryIdHandler,
    setPageSizeHandler,
    setSortByHandler,
    filters: countries,
    filterState: countriesState,
    parameters: { filterId: countryId, sortBy, pageSize },
    sortBys,
    pageSizes,
  } = useQuery(
    customerParametersType,
    countriesType,
    sortBys,
    customerActions,
    fetchCountries
  );

  if (countriesState.isLoading) {
    return <Fragment></Fragment>;
  }

  if (countriesState.error != null) {
    return <Error />;
  }

  return (
    <QueryBar>
      <FilterDropdown
        items={countries}
        currentId={countryId}
        onClickItem={setCountryIdHandler}
      />
      <SortByDropdown
        items={sortBys}
        currentSortBy={sortBy}
        onClickItem={setSortByHandler}
      />
      <PageSizeDropdown
        pageSizes={pageSizes}
        currentPageSize={pageSize}
        onClickItem={setPageSizeHandler}
      />
    </QueryBar>
  );
}

export default CustomersQueryBar;
