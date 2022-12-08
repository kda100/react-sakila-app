import { useDispatch, useSelector } from "react-redux";
import { Fragment, useEffect, useCallback, useMemo } from "react";
import { fetchCategories } from "../../store/categories/categoriesActionCreaterThunks";
import FilterDropdown from "../ui/dropdowns/FilterDropdown";
import Error from "../ui/Error";
import { filmActions } from "../../store/films/filmsSlice";
import sortByFields from "../../constants/films/sortByFields";
import SortByDropdown from "../ui/dropdowns/SortByDropdown";
import BaseQueryBar from "../ui/BaseQueryBar";
import PageSizeDropdown from "../ui/dropdowns/PageSizeDropdown";
import pageSizes from "../../constants/pageSizes";

let isInitial = true;

function FilmsQueryBar() {
  const dispatch = useDispatch();
  const categoriesState = useSelector((state) => state.categories);
  const { categoryId, sortBy, pageSize } = useSelector(
    (state) => state.films.parameters
  );

  const setCategoryIdHandler = useCallback((categoryId) => {
    dispatch(filmActions.setCategoryId(categoryId));
  }, []);

  const setSortByHandler = useCallback((sortBy) => {
    dispatch(filmActions.setSortBy(sortBy));
  }, []);

  const setPageSizeHandler = useCallback((pageSize) => {
    dispatch(filmActions.setPageSize(pageSize));
  }, []);

  const categoriesMemo = useMemo(
    () => categoriesState.categories,
    [categoriesState.categories]
  );
  const sortByFieldsMemo = useMemo(() => sortByFields, []);
  const pageSizesMemo = useMemo(() => pageSizes, []);

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCategories());
    }
    isInitial = false;
  }, [dispatch]);

  if (categoriesState.isLoading) {
    return <Fragment></Fragment>;
  }

  if (categoriesState.error != null) {
    return <Error />;
  }

  return (
    <BaseQueryBar>
      <FilterDropdown
        items={categoriesMemo}
        currentId={categoryId}
        onClickItem={setCategoryIdHandler}
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

export default FilmsQueryBar;
