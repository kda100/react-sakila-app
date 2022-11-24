import CustomPagination from "../ui/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { filmActions } from "../../store/films/filmsSlice";

function FilmsPagination() {
  const dispatch = useDispatch();
  const offset = useSelector((state) => state.films.parameters.offset);
  const totalPages = useSelector((state) => state.films.totalPages);

  function setOffsetHandler(offset) {
    dispatch(filmActions.setOffset(offset));
  }

  return (
    <CustomPagination
      currentOffset={offset}
      totalPages={totalPages}
      onClickItem={setOffsetHandler}
    />
  );
}

export default FilmsPagination;
