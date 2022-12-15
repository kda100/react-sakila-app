import filmsReducer from "./items/films/filmsSlice";
import customersReducer from "./items/customers/customersSlice";
import countriesReducer from "./filters/countries/countriesSlice";
import categoriesReducer from "./filters/categories/categoriesSlice";
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
