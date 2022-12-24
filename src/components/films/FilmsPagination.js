import CustomPagination from "../ui/CustomPagination";
import { filmActions } from "../../store/items/films/filmsSlice";
import usePagination from "../../hooks/usePagination";
import {
  filmParametersOffsetType,
  filmTotalPagesType,
} from "../../constants/customSelectorTypes";

function FilmsPagination() {
  const { offset, totalPages, setOffsetHandler } = usePagination(
    filmParametersOffsetType,
    filmTotalPagesType,
    filmActions
  );

  return (
    <CustomPagination
      currentOffset={offset}
      totalPages={totalPages}
      onClickItem={setOffsetHandler}
    />
  );
}

export default FilmsPagination;
