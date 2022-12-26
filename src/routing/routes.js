import CustomersPage from "../pages/CustomersPage";
import FilmsPage from "../pages/FilmsPage";
import RouteData from "../utils/RouteData";

export const filmsRoute = new RouteData("Films", "/films", <FilmsPage />);

export const customersRoute = new RouteData(
  "Customers",
  "/customers",
  <CustomersPage />
);

const routes = [filmsRoute, customersRoute];

export default routes;
