import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import useCustomSelector from "./useCustomSelector";

export default function useUrlPath(parametersSelectorType, itemActions) {
  const dispatch = useDispatch();
  const parameters = useCustomSelector(parametersSelectorType);
  const [urlParams, setUrlParams] = useSearchParams();
  const isInitial = useRef(true);

  useEffect(() => {
    if (Array.from(urlParams).length !== 0) {
      const {
        filterId = parameters.filterId,
        pageSize = parameters.pageSize,
        sortBy = parameters.sortBy,
        offset = parameters.offset,
      } = Object.fromEntries(urlParams);
      dispatch(itemActions.setFilterId(+filterId));
      dispatch(itemActions.setPageSize(+pageSize));
      dispatch(itemActions.setSortBy(sortBy));
      dispatch(itemActions.setOffset(+offset));
    }
    setUrlParams(parameters);
    isInitial.current = false;
  }, []);

  useEffect(() => {
    if (!isInitial.current) {
      setUrlParams(parameters);
    }
  }, [parameters]);
}
