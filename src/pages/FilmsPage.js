import FilmsTable from "../components/films/FilmsTable";
import CustomPagination from "../components/ui/CustomPagination";
import { filmActions } from "../store/items/films/filmsSlice";
import {
  filmParametersOffsetType,
  filmTotalPagesType,
  filmParametersType,
  categoriesType,
} from "../constants/customSelectorTypes";
import { fetchFilms } from "../store/items/films/filmsActionCreaterThunks";
import QueryBar from "../components/ui/QueryBar";
import sortBys from "../constants/films/sortBys";
import { fetchCategories } from "../store/filters/categories/categoriesActionCreaterThunks";

function FilmsPage() {
  return (
    <div>
      <QueryBar
        parametersSelectorType={filmParametersType}
        filterSelectorType={categoriesType}
        sortBys={sortBys}
        itemActions={filmActions}
        fetchFilters={fetchCategories}
      />
      <CustomPagination
        offsetSelectorType={filmParametersOffsetType}
        totalPagesSelectorType={filmTotalPagesType}
        itemActions={filmActions}
      />
      <FilmsTable />
    </div>
  );
}

export default FilmsPage;
