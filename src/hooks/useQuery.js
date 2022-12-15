import { useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import useCustomSelector from "./useCustomSelector";
import pageSizes from "../constants/pageSizes";

export default function useQuery(
  parametersSelectorType,
  filterSelectorType,
  sortBys,
  itemActions,
  fetchFilters
) {
  const dispatch = useDispatch();
  const filterState = useCustomSelector(filterSelectorType);
  const parameters = useCustomSelector(parametersSelectorType);

  const setFilterIdHandler = useCallback(
    (filterId) => {
      dispatch(itemActions.setFilterId(filterId));
    },
    [dispatch, itemActions]
  );

  const setSortByHandler = useCallback(
    (sortBy) => {
      dispatch(itemActions.setSortBy(sortBy));
    },
    [dispatch, itemActions]
  );

  const setPageSizeHandler = useCallback(
    (pageSize) => {
      dispatch(itemActions.setPageSize(pageSize));
    },
    [dispatch, itemActions]
  );

  const filtersMemo = useMemo(() => filterState.filters, [filterState.filters]);
  const sortBysMemo = useMemo(() => sortBys, []);
  const pageSizesMemo = useMemo(() => pageSizes, []);

  useEffect(() => {
    if (filterState.isInitial) {
      dispatch(fetchFilters());
    }
  }, [dispatch, filterState.isInitial]);

  return {
    setFilterIdHandler,
    setPageSizeHandler,
    setSortByHandler,
    filterState: filterState,
    filters: filtersMemo,
    parameters,
    sortBys: sortBysMemo,
    pageSizes: pageSizesMemo,
  };
}
