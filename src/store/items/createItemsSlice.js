import { createSlice } from "@reduxjs/toolkit";
import pageSizes from "../../constants/pageSizes";

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

export default function createItemsSlice(
  name,
  maxFilterId = 100,
  sortBys = []
) {
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
        const isValidFilterId =
          action.payload <= maxFilterId && action.payload >= -1;
        state.parameters.filterId = isValidFilterId ? action.payload : -1;
        state.parameters.offset = 0;
      },
      setSortBy(state, action) {
        const sortBy = sortBys.find(
          (sortBy) => sortBy.sortBy === action.payload
        );
        console.log(sortBy);
        state.parameters.sortBy = sortBy ? action.payload : "id";
        state.parameters.offset = 0;
      },
      setOffset(state, action) {
        state.parameters.offset = action.payload;
      },
      setPageSize(state, action) {
        const isValidPageSize = pageSizes.find(
          (pageSize) => pageSize === action.payload
        );
        state.parameters.pageSize = isValidPageSize
          ? action.payload
          : pageSizes[0];
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
