import { createSlice } from "@reduxjs/toolkit";
import noneSelected from "../../constants/noneSelected";

const initialState = {
  categories: [],
  isLoading: true,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
      state.categories.unshift(noneSelected);
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const categoryActions = categoriesSlice.actions;
export default categoriesSlice.reducer;
