import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useCallback, useMemo } from "react";
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

  const setCountryIdHandler = useCallback((countryId) => {
    dispatch(customerActions.setCountryId(countryId));
  }, []);

  const setSortByHandler = useCallback((sortBy) => {
    dispatch(customerActions.setSortBy(sortBy));
  }, []);

  const setPageSizeHandler = useCallback((pageSize) => {
    dispatch(customerActions.setPageSize(pageSize));
  }, []);

  const countriesMemo = useMemo(
    () => countriesState.countries,
    [countriesState.countries]
  );
  const sortByFieldsMemo = useMemo(() => sortByFields, []);
  const pageSizesMemo = useMemo(() => pageSizes, []);

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCountries());
    }
    isInitial = false;
  }, [dispatch]);

  if (countriesState.isLoading) {
    return <Fragment></Fragment>;
  }

  if (countriesState.error != null) {
    return <Error />;
  }

  return (
    <BaseQueryBar>
      <FilterDropdown
        items={countriesMemo}
        currentId={countryId}
        onClickItem={setCountryIdHandler}
      />
      <SortByDropdown
        items={sortByFieldsMemo}
        currentSortBy={sortBy}
        onClickItem={setSortByHandler}
      />
      <PageSizeDropdown
        pageSizes={pageSizesMemo}
        currentPageSize={pageSize}
        onClickItem={setPageSizeHandler}
      />
    </BaseQueryBar>
  );
}

export default CustomersQueryBar;
