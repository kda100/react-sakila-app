import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

  function setCategoryIdHandler(categoryId) {
    dispatch(filmActions.setCategoryId(categoryId));
  }

  function setSortByHandler(sortBy) {
    dispatch(filmActions.setSortBy(sortBy));
  }

  function setPageSizeHandler(pageSize) {
    dispatch(filmActions.setPageSize(pageSize));
  }

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchCategories());
    }
    isInitial = false;
  }, [dispatch]);

  if (categoriesState.isLoading) {
    return <div></div>;
  }

  if (categoriesState.error != null) {
    return <Error />;
  }

  return (
    <BaseQueryBar>
      <FilterDropdown
        items={categoriesState.categories}
        currentId={categoryId}
        onClickItem={setCategoryIdHandler}
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

export default FilmsQueryBar;
