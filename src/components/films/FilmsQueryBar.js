import { Fragment } from "react";
import { fetchCategories } from "../../store/filters/categories/categoriesActionCreaterThunks";
import FilterDropdown from "../ui/dropdowns/FilterDropdown";
import Error from "../ui/Error";
import { filmActions } from "../../store/items/films/filmsSlice";
import sortBys from "../../constants/films/sortBys";
import SortByDropdown from "../ui/dropdowns/SortByDropdown";
import QueryBar from "../ui/QueryBar";
import PageSizeDropdown from "../ui/dropdowns/PageSizeDropdown";
import useQuery from "../../hooks/useQuery";
import {
  filmParametersType,
  categoriesType,
} from "../../constants/customSelectorTypes";

function FilmsQueryBar() {
  const {
    setFilterIdHandler: setCategoryIdHandler,
    setPageSizeHandler,
    setSortByHandler,
    filters: categories,
    filterState: categoriesState,
    parameters: { filterId: categoryId, sortBy, pageSize },
    sortBys,
    pageSizes,
  } = useQuery(
    filmParametersType,
    categoriesType,
    sortBys,
    filmActions,
    fetchCategories
  );

  if (categoriesState.isLoading) {
    return <Fragment></Fragment>;
  }

  if (categoriesState.error != null) {
    return <Error />;
  }

  return (
    <QueryBar>
      <FilterDropdown
        items={categories}
        currentId={categoryId}
        onClickItem={setCategoryIdHandler}
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

export default FilmsQueryBar;
