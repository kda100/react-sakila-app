import FilterDropdown from "./dropdowns/FilterDropdown";
import SortByDropdown from "./dropdowns/SortByDropdown";
import PageSizeDropdown from "./dropdowns/PageSizeDropdown";
import useQuery from "../../hooks/useQuery";
import { Fragment } from "react";
import Error from "./Error";

function QueryBar(props) {
  const {
    setFilterIdHandler,
    setPageSizeHandler,
    setSortByHandler,
    filters,
    filterState: filterState,
    parameters: { filterId, sortBy, pageSize },
    sortBys,
    pageSizes,
  } = useQuery(
    props.parametersSelectorType,
    props.filterSelectorType,
    props.sortBys,
    props.itemActions,
    props.fetchFilters
  );

  if (filterState.isLoading) {
    return <Fragment></Fragment>;
  }

  if (filterState.error != null) {
    return <Error />;
  }

  return (
    <div className="my-2 d-flex">
      <FilterDropdown
        items={filters}
        currentId={filterId}
        onClickItem={setFilterIdHandler}
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
    </div>
  );
}

export default QueryBar;
