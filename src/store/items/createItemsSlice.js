import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: true,
  error: null,
  totalPages: 0,
  parameters: {
    filterId: -1,
    sortBy: "id",
    offset: 0,
    pageSize: 25,
  },
};

export default function createItemsSlice(name) {
  return createSlice({
    name: name,
    initialState: initialState,
    reducers: {
      loading(state) {
        state.isLoading = true;
      },
      setItems(state, action) {
        state.items = action.payload.content;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      },
      setFilterId(state, action) {
        state.parameters.filterId = action.payload;
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
}
