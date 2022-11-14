import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customers: [],
  isLoading: true,
  error: null,
  totalPages: 0,
  parameters: { countryId: -1, sortBy: "id", offset: 0, pageSize: 25 },
};

const customersSlice = createSlice({
  name: "customers",
  initialState: initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    setCustomers(state, action) {
      state.customers = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    setCountryId(state, action) {
      state.parameters.countryId = action.payload;
      state.parameters.offset = 0;
    },
    setSortBy(state, action) {
      state.parameters.sortBy = action.payload;
      state.parameters.offset = 0;
    },
    setOffset(state, action) {
      state.parameters.offset = action.payload;
    },
    setPageSize(state, action) {
      state.parameters.pageSize = action.payload;
      state.parameters.offset = 0;
    },
    setError(state, action) {
      state.error = action.payload;
      state.totalPages = 0;
      state.isLoading = false;
    },
  },
});

export const customerActions = customersSlice.actions;
export default customersSlice.reducer;
