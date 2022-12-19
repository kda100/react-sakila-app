import CustomersPage from "../pages/CustomersPage";
import FilmsPage from "../pages/FilmsPage";

export const filmsRoute = {
  name: "Films",
  route: "/films",
  page: <FilmsPage />,
};

export const customersRoute = {
  name: "Customers",
  route: "/customers",
  page: <CustomersPage />,
};

const routes = [filmsRoute, customersRoute];

export default routes;
