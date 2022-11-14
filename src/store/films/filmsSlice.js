import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  films: [],
  isLoading: true,
  error: null,
  totalPages: 0,
  parameters: {
    categoryId: -1,
    sortBy: "id",
    offset: 0,
    pageSize: 25,
  },
};

const filmsSlice = createSlice({
  name: "films",
  initialState: initialState,
  reducers: {
    loading(state) {
      state.isLoading = true;
    },
    setFilms(state, action) {
      state.films = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    setCategoryId(state, action) {
      state.parameters.categoryId = action.payload;
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

export const filmActions = filmsSlice.actions;
export default filmsSlice.reducer;
