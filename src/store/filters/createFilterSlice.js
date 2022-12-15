import { createSlice } from "@reduxjs/toolkit";
import noneSelected from "../../constants/noneSelected";

const initialState = {
  filters: [],
  isLoading: true,
  error: null,
  isInitial: true, //to ensure fetch filters is only called once.
};

export default function createFilterSlice(name) {
  return createSlice({
    name: name,
    initialState: initialState,
    reducers: {
      setFilters(state, action) {
        state.filters = action.payload;
        state.filters.unshift(noneSelected);
        state.isLoading = false;
        state.isInitial = false;
      },
      setError(state, action) {
        state.error = action.payload;
        state.isLoading = false;
      },
    },
  });
}
