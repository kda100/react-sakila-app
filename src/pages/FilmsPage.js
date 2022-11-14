import FilmsTable from "../components/films/FilmsTable";
import FilmsQueryBar from "../components/films/FilmsQueryBar";
import FilmsPagination from "../components/films/FilmsPagination";

function FilmsPage() {
  return (
    <div>
      <FilmsQueryBar />
      <FilmsPagination />
      <FilmsTable />
    </div>
  );
}

export default FilmsPage;
