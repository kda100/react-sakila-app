import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFilms } from "../../store/films/filmsActionCreaterThunks";
import tableHeaders from "../../constants/films/tableHeaders";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import CustomTable from "../ui/table/CustomTable";
import FilmsTableContent from "./FilmsTableContent";

function FilmsTable() {
  const dispatch = useDispatch();
  const filmsState = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(fetchFilms(filmsState.parameters));
  }, [filmsState.parameters, dispatch]);

  if (filmsState.isLoading) {
    return <Loading />;
  }
  if (filmsState.error != null) {
    return <Error message={filmsState.error} />;
  }

  return (
    <CustomTable tableHeaders={tableHeaders}>
      <FilmsTableContent films={filmsState.films} />
    </CustomTable>
  );
}

export default FilmsTable;
