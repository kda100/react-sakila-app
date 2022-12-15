import { fetchFilms } from "../../store/items/films/filmsActionCreaterThunks";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import CustomTable from "../ui/table/CustomTable";
import FilmsTableContent from "./FilmsTableContent";
import tableHeaders from "../../constants/films/tableHeaders";
import useItemsState from "../../hooks/useItemsState";
import { filmsType } from "../../constants/customSelectorTypes";

function FilmsTable() {
  return (
    <CustomTable
      tableHeaders={tableHeaders}
      itemsSelectorType={filmsType}
      fetchItems={fetchFilms}
    >
      <FilmsTableContent />
    </CustomTable>
  );
}

export default FilmsTable;
