import { fetchFilms } from "../../store/items/films/filmsActionCreaterThunks";
import CustomTable from "../ui/table/CustomTable";
import FilmsTableContent from "./FilmsTableContent";
import tableHeaders from "../../constants/films/tableHeaders";
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
