import { createSlice } from "@reduxjs/toolkit";
import noneSelected from "../../constants/noneSelected";

const initialState = {
  countries: [],
  isLoading: true,
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  reducers: {
    setCountries(state, action) {
      state.countries = action.payload;
      state.countries.unshift(noneSelected);
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const countryActions = countriesSlice.actions;
export default countriesSlice.reducer;
