import filmsReducer from "./films/filmsSlice";
import customersReducer from "./customers/customersSlice";
import countriesReducer from "./countries/countriesSlice";
import categoriesReducer from "./categories/categoriesSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    films: filmsReducer,
    customers: customersReducer,
    countries: countriesReducer,
    categories: categoriesReducer,
  },
});

export default store;
