import RouteData from "../utils/RouteData";
import React from "react";

const FilmsPage = React.lazy(() => import("../pages/FilmsPage"));
const CustomersPage = React.lazy(() => import("../pages/CustomersPage"));

export const filmsRoute = new RouteData("Films", "/films", <FilmsPage />);

export const customersRoute = new RouteData(
  "Customers",
  "/customers",
  <CustomersPage />
);

const routes = [filmsRoute, customersRoute];

export default routes;
