import { useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import useCustomSelector from "./useCustomSelector";
import pageSizes from "../constants/pageSizes";
import { Dispatch } from "react";

/**
 * Hook to control the state of query bar including: filter, page size and sort by.
 * @param {String} parametersSelectorType
 * @param {String} filterSelectorType
 * @param {Array<{name: String, sortBy: String}>} sortBys
 * @param {any} itemActions
 * @param {() => ((dispatch: Dispatch<AnyAction>) => void)} fetchFilters
 * @returns {{
 * setFilterIdHandler: (filterId: Number) => void,
 * setPageSizeHandler: (pageSize: Number) => void,
 * setSortByHandler: (sortBy: String) => void,
 * filterState: any,
 * filtersMemo: Array<{id: Number, name: String}>,
 * parameters: { filterId: String, sortBy: String, offset:Number, pageSize: Number },
 * sortBys: {Array<{name: String, sortBy: String}>},
 * pageSizes: {Array<Number>}
 * }} {setFilterIdHandler, setPageSizeHandler, setSortByHandler, filterState, filtersMemo, parameters, sortBys, pageSizes}
 */

export default function useQuery(
  parametersSelectorType,
  filterSelectorType,
  sortBys,
  itemActions,
  fetchFilters
) {
  const dispatch = useDispatch();
  const filterState = useCustomSelector(filterSelectorType); //get filters state
  const parameters = useCustomSelector(parametersSelectorType); //gets parameters for items

  /**
   * sets filter id for items
   * @param {filterId: Number} filterId
   */
  const setFilterIdHandler = useCallback(
    (filterId) => {
      dispatch(itemActions.setFilterId(filterId));
    },
    [dispatch, itemActions]
  );

  /**
   * sets sort by for items
   * @param {sortBy: String} filterId
   */
  const setSortByHandler = useCallback(
    (sortBy) => {
      dispatch(itemActions.setSortBy(sortBy));
    },
    [dispatch, itemActions]
  );

  /**
   * sets page size for items
   * @param {sortBy: Number} pageSize
   */
  const setPageSizeHandler = useCallback(
    (pageSize) => {
      dispatch(itemActions.setPageSize(pageSize));
    },
    [dispatch, itemActions]
  );

  //retains state of objects
  const filtersMemo = useMemo(() => filterState.filters, [filterState.filters]);
  const sortBysMemo = useMemo(() => sortBys, [sortBys]);
  const pageSizesMemo = useMemo(() => pageSizes, []);

  //only executed once to fetch filters when page first loads
  useEffect(() => {
    if (filterState.isInitial) {
      dispatch(fetchFilters());
    }
  }, [dispatch, filterState.isInitial, fetchFilters]);

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
