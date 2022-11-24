import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCountries } from "../../store/countries/countriesActionCreaterThunks";
import FilterDropdown from "../ui/dropdowns/FilterDropdown";
import Error from "../ui/Error";
import { customerActions } from "../../store/customers/customersSlice";
import BaseQueryBar from "../ui/BaseQueryBar";
import sortByFields from "../../constants/customers/sortByFields";
import SortByDropdown from "../ui/dropdowns/SortByDropdown";
import PageSizeDropdown from "../ui/dropdowns/PageSizeDropdown";
import pageSizes from "../../constants/pageSizes";

let isInitial = true;

function CustomersQueryBar() {
  const dispatch = useDispatch();
  const countriesState = useSelector((state) => state.countries);
  const { countryId, sortBy, pageSize } = useSelector(
    (state) => state.customers.parameters
  );

  function setCountryIdHandler(countryId) {
    dispatch(customerActions.setCountryId(countryId));
  }

  function setSortByHandler(sortBy) {
    dispatch(customerActions.setSortBy(sortBy));
  }

  function setPageSizeHandler(pageSize) {
    dispatch(customerActions.setPageSize(pageSize));
  }

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCountries());
    }
    isInitial = false;
  }, [dispatch]);

  if (countriesState.isLoading) {
    return <div></div>;
  }

  if (countriesState.error != null) {
    return <Error />;
  }

  return (
    <BaseQueryBar>
      <FilterDropdown
        items={countriesState.countries}
        currentId={countryId}
        onClickItem={setCountryIdHandler}
      />
      <SortByDropdown
        items={sortByFields}
        currentSortBy={sortBy}
        onClickItem={setSortByHandler}
      />
      <PageSizeDropdown
        pageSizes={pageSizes}
        currentPageSize={pageSize}
        onClickItem={setPageSizeHandler}
      />
    </BaseQueryBar>
  );
}

export default CustomersQueryBar;
